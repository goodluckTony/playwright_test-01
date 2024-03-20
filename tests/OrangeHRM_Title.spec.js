// @ts-check

const { test, expect } = require("@playwright/test");

test("Validate OrangeHRM website title", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  
  await expect(page).toHaveTitle(/OrangeHRM/);
});
