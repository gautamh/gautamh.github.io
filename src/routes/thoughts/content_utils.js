import { compile } from 'mdsvex';
import { google } from 'googleapis';
import { GOOGLE_APPLICATION_CREDENTIALS } from '$env/static/private';
import { GCP_PROJECT } from '$env/static/private';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

export const POST_MAP = {
    "reading-2025": {
      docId: "1GwXV7I8pI8-CGNk81JZqxZCgkC9t56uW1P4D9L2TZEg",
      published: true
    },
    "reading-2024": {
      docId: "1uXheKyYSpxj2UFOb2ehDRIX71_EUmo7nPrzEvrujhg4",
      published: true
    },
    "llm-fec-scraping": {
      docId: "1TujwPxRbckbKoU43nHNkhwtqk7bFrZYaIVKOoZBaVFU",
      published: true
    },
    "site-rework": {
      docId: "1y9aQZRNvJVzKGLuCKFFb3c_HyL6Tmdj2pT38dPXiipA",
      published: true
    },
    "example": {
      docId: "1n8yRyoE-64nBhOWUzBOhQ5nPRLnim7f0TI6Yzty-VCI",
      published: false
    },
    "test": { 
      docId: "1n8yRyoE-64nBhOWUzBOhQ5nPRLnim7f0TI6Yzty-VCI",
      published: false
    },
  };
  
  /** @type {import('unified').Plugin<[], import('mdast').Root>} */
  function tufteRemarkDirective() {
    return (tree, file) => {
      visit(tree, (node) => {
        if (
          node.type === 'textDirective' ||
          node.type === 'leafDirective' ||
          node.type === 'containerDirective'
        ) {
          const data = node.data || (node.data = {})
          const attributes = node.attributes || {}
          const id = attributes.id
  
          if (node.name === 'newthought') {
            data.hName = 'span'
            data.hProperties = {
              class: 'newthought',
            }
          }
          else if (node.name === 'sidenote') {
            data.hName = 'sidenote'
            data.hProperties = {
              sidenoteId: id,
            };
          }
          else return;
        }
      })
    }
  }
  
  /** @type {import('unified').Plugin<[], import('hast').Root>} */
  function sidenoteRehypeExtension() {
    return (tree) => {
      visit(tree, 'element', (node) => {
        if (['sidenote'].includes(node.tagName)) {
          const sidenoteContents = [...node.children];
          node.children = [];       
          node.children.push({
            type: "element",
            tagName: "label",
            properties: {
              htmlFor: [
                "sn-" + node.properties.sidenoteId,
              ],
              className: [
                "margin-toggle",
                "sidenote-number"
              ]
            },
            children: [],
            
          });
          node.children.push(
            {
              type: "element",
              tagName: "input",
              properties: {
                type: "checkbox",
                id: "sn-" + node.properties.sidenoteId,
                className: [
                  "margin-toggle"
                ]
              },
              children: [],
            }
          );
          node.children.push(
            {
              type: "element",
              tagName: "span",
              properties: {
                className: [
                  "sidenote"
                ]
              },
              children: sidenoteContents,
            }
          );
        }
      })
    }
  }
  
  const mdsvexOptions = {
      extension: ".md",
      rehypePlugins: [sidenoteRehypeExtension],
      remarkPlugins: [remarkGfm, remarkParse, remarkDirective, tufteRemarkDirective]
  
  }
  
  /**
   * @param {string} rawMd
   */
  export async function compileMdsvex(rawMd) {
    let compiledHtml = await compile(rawMd, mdsvexOptions);
    compiledHtml.code = compiledHtml.code
        .replace(/>{@html `<code class="language-/g, '><code class="language-')
        .replace(/<\/code>`}<\/pre>/g, '</code></pre>');
    return compiledHtml;
  }
  
  /**
   * @param {number} numRetries
   */
  export async function callWithRetries(retryFunction, numRetries) {
    try {
      console.log("calling retryFunction");
      return await retryFunction();
    } catch (error) {
      if (typeof error === 'function') {
        console.log(error());
      }
      console.log(JSON.stringify(error));
      if (numRetries > 0) {
        console.log("RETRYING");
        console.log("num retries: %d", numRetries);
        return await callWithRetries(retryFunction, numRetries - 1);
      }
      throw error;
    }
  }

export async function getAuthClient() {
    return await callWithRetries(async () => {
        return await google.auth.getClient({
          keyFilename: GOOGLE_APPLICATION_CREDENTIALS,
          projectId: GCP_PROJECT,
          scopes: ['https://www.googleapis.com/auth/documents.readonly'],
        });
      }, 2);
  }
