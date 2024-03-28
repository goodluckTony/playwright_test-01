// @ts-check

const { test, expect } = require("@playwright/test");

test("Handling drag n drop", async ({ page }) => {
  await page.goto("https://drag-and-drop-tricks.webflow.io/");

  // const sourceEl = page.locator(".draggable.correct.ui-draggable.ui-draggable-handle");
  // const targetEl = page.locator(".quiz-option.is-drop");
  // await sourceEl.dragTo(targetEl);

  await page.locator(".draggable.correct.ui-draggable.ui-draggable-handle").hover();
  await page.mouse.down();
  await page.locator(".quiz-option.is-drop").hover();
  await page.mouse.up();

  await page.waitForTimeout(10000);
});