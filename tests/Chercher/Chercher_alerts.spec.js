// @ts-check

const { test, expect } = require("@playwright/test");

test("Handling alerts", async ({ page }) => {
  await page.goto("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");

  await page.on("dialog", async (a) => {
    await a.message()
    await page.waitForTimeout(2000)
    a.accept();
  })
  await page.locator("//input[@name='alert']").click();

  await page.waitForTimeout(10000);
});