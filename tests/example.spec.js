// @ts-check
const {test, expect} = require("@playwright/test");

test("test", async ({page}) => {
  await page.goto("https://www.wikipedia.org/");
  await page.getByRole("link", {name: "English 6,792,000+ articles"}).click();
  await page
    .getByRole("link", {
      name: "Ownership, Unity and Responsibility Party",
      exact: true,
    })
    .click();
  await page
    .getByRole("row", {name: "2010 24,138 10.24 (#2) 4 / 50"})
    .getByRole("link")
    .click();
  await page.goto(
    "https://en.wikipedia.org/wiki/Ownership,_Unity_and_Responsibility_Party"
  );
  await page.getByText('^ "Sogavare reassures central').click();
  await page.screenshot({path: `wiki_screen.png`});
});
