// @ts-check

const { test, expect } = require("@playwright/test");

test("Handling autocomplete", async ({ page }) => {
  const searchVal = "Ch";
  const selectVal = "China";

  await page.goto("https://alphagov.github.io/accessible-autocomplete/examples/");
  
  // await page.locator("//input[@id='autocomplete-default']").fill("A");
  // await page.keyboard.press("Arrowdown");
  // await page.keyboard.press("Arrowdown");
  // await page.keyboard.press("Enter");

  // await page.click("//li[@id='autocomplete-default__option--2']");

  await page.locator("//input[@id='autocomplete-default']").type(searchVal, {delay: 100});
  const values = page.locator("//ul[@id='autocomplete-default__listbox']/li");
  const countValues = await values.count();
  for (let i = 0; i < countValues; i++ ) {
    const txt = await values.nth(i).textContent();
    if ( txt === selectVal) {
      await values.nth(i).click();
      break;
    }
  }

  await page.waitForTimeout(10000);
});