// @ts-check

const { test, expect } = require("@playwright/test");

test.only("Verify title", async ({ page }) => {
  // test.skip(({ browserName }) => browserName !== "firefox", "Chromium only!");
  // test.fail();
  // test.fixme();
  // test.slow();
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  const title = await page.title();
  expect(title).toBe("OrangeHRM");
});

test.only("Verify url", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  const url = await page.url();
  expect(url).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

test("Verify login button", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  const btn = await page.locator("button[type='submit']");
  const btnTxt = await btn.textContent();
  expect(btnTxt).toBe(" Login ");
});