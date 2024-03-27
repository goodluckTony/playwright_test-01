// @ts-check

const { test, expect } = require("@playwright/test");

test("Single file upload", async ({ page }) => {
  await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");

  // await page.setInputFiles();
  await page.locator("//input[@id='upload']").setInputFiles("C:/Users/mloba/Downloads/Telegram Desktop/image_2024-03-20_15-11-41.png");

  await page.waitForTimeout(10000);
});