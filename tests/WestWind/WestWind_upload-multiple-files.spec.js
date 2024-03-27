// @ts-check

const { test, expect } = require("@playwright/test");

test.skip("Multiple files upload", async ({ page }) => {
  await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");

  // await page.setInputFiles();
  await page.locator("//input[@id='upload']").setInputFiles([
    "C:/Users/mloba/Downloads/Telegram Desktop/image_2024-03-20_15-11-41.png",
    "C:/Users/mloba/Downloads/Telegram Desktop/image_2024-03-20_11-13-45.png"
  ]);

  await page.waitForTimeout(10000);
});

test.skip("buffer file upload", async ({ page }) => {
  await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");

  // await page.setInputFiles();
  await page.locator("//input[@id='upload']").setInputFiles({
    name: "Playwright.txt",
    mimeType: "text/Plain",
    buffer: Buffer.from("this is a test")
  });

  await page.waitForTimeout(10000);
});

test("Remove upload files", async ({ page }) => {
  await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");

  // await page.setInputFiles();
  await page.locator("//input[@id='upload']").setInputFiles([
    "C:/Users/mloba/Downloads/Telegram Desktop/image_2024-03-20_15-11-41.png",
    "C:/Users/mloba/Downloads/Telegram Desktop/image_2024-03-20_11-13-45.png"
  ]);

  await page.waitForTimeout(10000);

  await page.locator("//input[@id='upload']").setInputFiles([]);

  await page.waitForTimeout(10000);
});