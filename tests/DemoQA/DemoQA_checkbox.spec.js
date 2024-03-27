// @ts-check

const { test, expect } = require("@playwright/test");

test("Handling checkbox", async({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");

  await page.locator("//label[normalize-space()='Sports']").click();
  await page.locator("//label[normalize-space()='Music']").check();
  await page.locator("//label[normalize-space()='Sports']").uncheck();

  await page.waitForTimeout(10000);
});