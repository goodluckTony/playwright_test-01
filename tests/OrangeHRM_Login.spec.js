// @ts-check

const { test, expect } = require("@playwright/test");

test("Validate OrangeHRM website login", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');

  const loginVal = await page.getAttribute('input[name="username"]', 'value');
  const passwordVal = await page.getAttribute('input[name="password"]', 'value');

  expect(loginVal).toBe('Admin');
  expect(passwordVal).toBe('admin123');

  const loginRegex = /^[A-Z][a-z]{4,}$/;
  const passwordRegex = /^[a-zA-Z0-9]{8,}$/;

  expect(loginRegex.test(loginVal)).toBe(true);
  expect(passwordRegex.test(passwordVal)).toBe(true);
});