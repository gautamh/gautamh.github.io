import { describe, expect, it } from "vitest";
import { render } from "@testing-library/svelte"
import Page from "./+page.svx";

describe("MyComponent", () => {
  it("should render the title and content", async () => {
    const { container } = await render(Page, {
      data: {
        title: "This is a <b>fancy title</b>",
        plainTitle: "This is a title",
        subtitle: "This is a subtitle",
        body: {
          code: "```js\n" +
            "console.log('Hello, world!');\n" +
          "```",
        },
      },
    });

    console.warn(JSON.stringify(container.querySelector("#title")));
    expect(container.querySelector("#tufte-css").textContent).toBe("This is a fancy title");
    expect(container.querySelector("title").innerHtml).toBe("This is a title");
    expect(container.querySelector(".subtitle").textContent).toBe("This is a subtitle");
    expect(container.querySelector("section").textContent).toContain("`js\nconsole.log('Hello, world!');\n`");
  });
});