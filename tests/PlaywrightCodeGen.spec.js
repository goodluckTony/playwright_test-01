import { test, expect } from '@playwright/test';

test('OrangeHRM CodeGen', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Пошук', { exact: true }).click();
  await page.getByLabel('Пошук', { exact: true }).fill('playwright');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
});