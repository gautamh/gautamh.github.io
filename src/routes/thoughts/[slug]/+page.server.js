import { compile } from 'mdsvex';
import { docToArchieML } from '@newswire/doc-to-archieml';
import { error } from '@sveltejs/kit';
import { google } from 'googleapis';
import { GOOGLE_APPLICATION_CREDENTIALS } from '$env/static/private';
import { GCP_PROJECT } from '$env/static/private';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

const POST_MAP = {
  "example": "1n8yRyoE-64nBhOWUzBOhQ5nPRLnim7f0TI6Yzty-VCI",
  "test": "1n8yRyoE-64nBhOWUzBOhQ5nPRLnim7f0TI6Yzty-VCI"
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
async function compileMdsvex(rawMd) {
  return await compile(rawMd, mdsvexOptions);
}

/**
 * @param {number} numRetries
 */
async function callWithRetries(retryFunction, numRetries) {
  try {
    console.log("calling retryFunction");
    return await retryFunction();
  } catch (error) {
    console.log(JSON.stringify(error));
    if (numRetries > 0) {
      console.log("RETRYING");
      console.log("num retries: %d", numRetries);
      return await callWithRetries(retryFunction, numRetries - 1);
    }
    throw error;
  }
}

export async function load({ params }) {
    if (!(params.slug in POST_MAP)) {
      return {};
    }

    console.log("HELLO!");
    console.log("getting auth client");
    const authClient = await callWithRetries(async () => {
      return await google.auth.getClient({
        keyFilename: GOOGLE_APPLICATION_CREDENTIALS,
        projectId: GCP_PROJECT,
        scopes: ['https://www.googleapis.com/auth/documents.readonly'],
      });
    }, 2);
    console.log("got auth client");

    // pass in the valid authentication and ID of the document you want to process
    console.log("retrieving doc for: %s", params.slug);
    const results = await callWithRetries(async () => {
      return await docToArchieML({ documentId: POST_MAP[params.slug], auth: authClient });
    }, 2);
    console.log("retrieved doc");

    console.log(results);
    const compiledHtml = await compileMdsvex(results.content.map(item => item.value).join('\n\n'));
    compiledHtml.code = compiledHtml.code
      .replace(/>{@html `<code class="language-/g, '><code class="language-')
      .replace(/<\/code>`}<\/pre>/g, '</code></pre>');
    console.log(compiledHtml);

    // Return the results
    /*if (Object.keys(results).length) return results;
    throw error(404, 'not found');*/
    return compiledHtml;
}