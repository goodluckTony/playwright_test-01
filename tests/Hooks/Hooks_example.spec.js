// @ts-check

const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.google.com/");
});

test.beforeEach(async ({ page }) => {
  await page.close();
});

test("Verify title", async ({ page }) => {
  const title = await page.title();
  expect(title).toBe("Google");
});

test("Verify url", async ({ page }) => {
  const url = await page.url();
  expect(url).toBe("https://www.google.com/");
});