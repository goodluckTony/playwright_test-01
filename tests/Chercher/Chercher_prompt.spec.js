// @ts-check

const { test, expect } = require("@playwright/test");

test("Prompt alert", async ({ page }) => {
  await page.goto("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
  await page.on("dialog", async (c) => {
    await c.message();
    await page.waitForTimeout(2000);
    c.accept("Testing");
    await page.waitForTimeout(2000);
    // expect(c.type()).toContain("confirm");
    expect(c.type()).toContain("prompt");
  });
  await page.locator("//input[@name='prompt']").click();
  await page.waitForTimeout(10000);
});