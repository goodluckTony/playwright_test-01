// @ts-check

const { test, expect } = require("@playwright/test");

test("Handling multi values of dropdown", async ({ page }) => {
  await page.goto("https://chercher.tech/practice/practice-dropdowns-selenium-webdriver");

  // await page.locator("//select[@id='second']").selectOption(["Pizza", "Burger", "Bonda"]);
  // await page.locator("//select[@id='second']").selectOption([ {value: "bonda"}, {value: "pizza"} ]);
  await page.locator("//select[@id='second']").selectOption([ {index: 1}, {index: 3} ]);

  await page.waitForTimeout(10000);
});