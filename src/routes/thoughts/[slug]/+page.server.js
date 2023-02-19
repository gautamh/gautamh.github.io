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

    // Return the results
    return compiledHtml;
}