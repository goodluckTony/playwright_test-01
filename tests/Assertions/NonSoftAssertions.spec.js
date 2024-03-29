// @ts-check

const { test, expect } = require("@playwright/test");

test.only("Non and soft assertions", async ({ page }) => {
  await page.goto("https://seleniumbase.io/demo_page");

  const checkbox = await page.locator("#checkBox2");
  await checkbox.check();
  await expect.soft(checkbox).not.toBeChecked();

  const val = await page.locator("//h1[normalize-space()='Demo Page']");
  await expect(val).toContainText("Demo Page");

  const link = await page.locator("#myLink1");
  await expect(link).toHaveAttribute("href", "https://seleniumbase.com");

  const links = await page.locator("a");
  await expect(links).toHaveCount(7);

  const selectdropdown = await page.locator("#mySelect");
  await expect(selectdropdown).toHaveClass("selectClass");

  
});
