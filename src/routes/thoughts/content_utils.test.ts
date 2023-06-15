import { afterEach, beforeEach, expect, describe, it, test, vi } from 'vitest';
import { compileMdsvex, callWithRetries } from './content_utils';

function setupMocks() {
  vi.mock('$env/static/private', () => import.meta.env);
  vi.mock('@newswire/doc-to-archieml', () => {
    return {
      default: () => ({})
    }
  });
  vi.mock('googleapis', () => {
    return {
      default: () => ({})
    }
  });
}

describe('content_utils test', async () => {

  beforeEach(() => {
    setupMocks();
  });

  test('compileMdsvex basic', async () => {
    const rawMd = 
    "## This is a heading\n\n" +

    "This is some Markdown text."
    ;

    const compiledHtml = await compileMdsvex(rawMd);

    console.warn(compiledHtml!.code);
    expect(compiledHtml!.code).toContain('<h2>This is a heading</h2>');
    expect(compiledHtml!.code).toContain('<p>This is some Markdown text.</p>');
  });

  test('compileMdsvex with code', async () => {
    const rawMd = 
    "## Javascript\n\n" +
    "```js\n" +
    "function test() {\n" +
    "  console.log(\"this is some code\");\n" +
    "}\n" +
    "```";

    const compiledHtml = await compileMdsvex(rawMd);

    console.warn(compiledHtml!.code);
    expect(compiledHtml!.code).toContain('<pre class="language-js"><code class="language-js">');
  });

  test('compileMdsvex with sidenote', async () => {
    const rawMd = 
    "## Sidenote\n\n" +
    "This is some Markdown text that has a sidenote." +
    ":sidenote[This is a sidenote]{#note}";

    const compiledHtml = await compileMdsvex(rawMd);

    expect(compiledHtml!.code.replace(/(\r\n|\n|\r)/gm, "").replace(/\s\s+/g, ' '))
      .toContain('<sidenote sidenoteId="note"><label for="sn-note" ' + 
    'class="margin-toggle sidenote-number"></label>' + 
    '<input type="checkbox" id="sn-note" class="margin-toggle">' + 
    '<span class="sidenote">This is a sidenote</span></sidenote>');
  });

  test('compileMdsvex with newthought', async () => {
    const rawMd = 
    "## Newthought\n\n" +
    ":newthought[This is a new thuught]";

    const compiledHtml = await compileMdsvex(rawMd);

    expect(compiledHtml!.code.replace(/(\r\n|\n|\r)/gm, "").replace(/\s\s+/g, ' '))
      .toContain('<span class="newthought">This is a new thuught</span>');
  });

  afterEach(() => {
    vi.restoreAllMocks()
  });
});

describe('callWithRetries', () => {

  beforeEach(() => {
    setupMocks();
  });

  it('should retry the function a specified number of times if it throws an error', async () => {

    interface Error {
      status?: number;
    }
  
    const retryFunction = () => {
      var err = new Error('Error');
      err.status = 500;
      throw err;
    };
    const numRetries = 3;

    try {
      await callWithRetries(retryFunction, numRetries);
      expect.fail('The function should have thrown an error');
    } catch (error) {
      console.log(error);
      /* if (error instanceof Function) {
        expect(error.message).toBe('Error');
      } else {
        expect.fail('Bad error type')
      } */
    }
  });

  it('should not retry the function if it does not throw an error', async () => {
    const retryFunction = () => {
      return 'Hello, world!';
    };
    const numRetries = 3;

    const result = await callWithRetries(retryFunction, numRetries);
    expect(result).toBe('Hello, world!');
  });

  afterEach(() => {
    vi.restoreAllMocks()
  });
});
