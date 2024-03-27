

const { test, expect } = require('@playwright/test');

test('Url changes after navigation', async ({ page }) => {
  await page.goto('https://goodlucktony.github.io/proj_bakery-01/');
  const initUrl = page.url();
  await page.click('a#footer-about');
  await page.waitForNavigation();
  const newUrl = page.url();
  // expect(newUrl).not.toBe(initUrl);
  expect(newUrl.includes('#about')).toBe(true);
});