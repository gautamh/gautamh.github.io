import { docToArchieML } from '@newswire/doc-to-archieml';
import {POST_MAP, compileMdsvex, callWithRetries, getAuthClient} from './content_utils.js';

export async function load() {
    let slugsToDocIds = Object.entries(POST_MAP);

    console.log("getting auth client");
    const authClient = await getAuthClient();
    console.log("got auth client");

    let snippets = 
        await Promise.all(slugsToDocIds.map(async ([slug, docId]) => 
            createSummarySnippet(slug, docId, authClient)));
    
    return {"snippets": snippets};
}

/**
 * @param {string} urlSlug
 * @param {string} docId
 * @param {any} authClient
 */
async function createSummarySnippet(urlSlug, docId, authClient) {
    let results = await callWithRetries(async () => {
        return await docToArchieML({ documentId: docId, auth: authClient });
      }, 2);
    let contentRegex = /<p>(.*)<\/p>/;
    return {
        slug: urlSlug,
        title: (await compileMdsvex(results.title)).code.match(contentRegex)[1],
        subtitle: (await compileMdsvex(results.subtitle)).code.match(contentRegex)[1],
        date: results.date
    };
}
