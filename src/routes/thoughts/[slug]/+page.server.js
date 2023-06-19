import { docToArchieML } from '@newswire/doc-to-archieml';
import {POST_MAP, compileMdsvex, callWithRetries, getAuthClient} from '../content_utils.js';

export async function load({ params }) {
    if (!(params.slug in POST_MAP)) {
      return {};
    }

    console.log("HELLO!");
    console.log("getting auth client");
    const authClient = await getAuthClient();
    console.log("got auth client");

    // pass in the valid authentication and ID of the document you want to process
    console.log("retrieving doc for: %s", params.slug);
    const results = await callWithRetries(async () => {
      return await docToArchieML({ documentId: POST_MAP[params.slug].docId, auth: authClient });
    }, 2);
    console.log("retrieved doc");

    console.log(results);
    const compiledHtml = await compileMdsvex(results.content.map(item => item.value).join('\n\n'));
    console.log(compiledHtml);

    let contentRegex = /<p>(.*)<\/p>/;
    // Return the results
    return {
      body: compiledHtml,
      title: (await compileMdsvex(results.title)).code.match(contentRegex)[1],
      plainTitle: results.plainTitle,
      subtitle: (await compileMdsvex(results.subtitle)).code.match(contentRegex)[1],
    };
}