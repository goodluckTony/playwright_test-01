// @ts-check

const { test, expect } = require("@playwright/test");

test("Handling iFrames", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/iframe");

  const FrameArea = await page.frameLocator("#mce_0_ifr").locator("#tinymce");
  await FrameArea.fill("testing tutorial");
  await expect(FrameArea).toHaveText("testing tutorial");

  await page.waitForTimeout(10000);
});