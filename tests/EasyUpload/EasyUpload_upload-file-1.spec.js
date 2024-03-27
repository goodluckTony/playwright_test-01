// @ts-check

const { test, expect } = require("@playwright/test");

test("Upload file without input type", async ({ page }) => {
  await page.goto("https://easyupload.io/");

  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.locator("//button[@class='dz-button']").click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles("C:/Users/mloba/Downloads/Telegram Desktop/image_2024-03-20_15-11-41.png");

  await page.waitForTimeout(10000);
});