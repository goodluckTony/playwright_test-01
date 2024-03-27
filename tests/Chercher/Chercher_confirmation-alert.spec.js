// @ts-check

const { test, expect } = require("@playwright/test");

test("Confirmation alert", async ({ page }) => {
  await page.goto("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");

  await page.on("dialog", async (b) => {
    await b.message();
    await page.waitForTimeout(2000);
    // b.accept();
    b.dismiss();
  });
  await page.locator("//input[@name='confirmation']").click();

  await page.waitForTimeout(10000);
});