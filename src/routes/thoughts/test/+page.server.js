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

export async function load() {
    console.log("HELLO!");
    const authClient = await google.auth.getClient({
        keyFilename: GOOGLE_APPLICATION_CREDENTIALS,
        projectId: GCP_PROJECT,
        scopes: ['https://www.googleapis.com/auth/documents.readonly'],
      });

    // pass in the valid authentication and ID of the document you want to process
    const results = await docToArchieML({ documentId: '1n8yRyoE-64nBhOWUzBOhQ5nPRLnim7f0TI6Yzty-VCI', auth: authClient });

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