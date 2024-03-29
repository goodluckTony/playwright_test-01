// @ts-check

const { test, expect } = require("@playwright/test");

test.only("Assertions non retry", async ({ page }) => {
  await page.goto("https://seleniumbase.io/demo_page");

  const title= await page.title();
  expect(title).toBe("Web Testing Page");

  const pageURL = await page.url();
  expect(pageURL).toContain("demo_page");

  const AllCheckboxes = await page.locator("//input[@type='checkbox']").count();
  expect(AllCheckboxes).toBeGreaterThan(0);

  const elementlength = await page.locator("tbody tr td h1").textContent();
  expect(elementlength).toHaveLength(9);
  
});