// @ts-check

const { test, expect } = require("@playwright/test");

test("Basic auth", async ({ page }) => {
  await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

  const txt = await page.locator("div[class='example'] p").textContent();
  expect(txt).toContain("Congratulations");

  await page.waitForTimeout(10000);
});
