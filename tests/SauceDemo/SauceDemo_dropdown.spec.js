// @ts-check

const { test, expect } = require("@playwright/test");

test("Handling select based dropdown", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator("//input[@id='user-name']").fill("standard_user");
  await page.locator("//input[@id='password']").fill("secret_sauce");
  await page.locator("//input[@id='login-button']").click();
  // await page.locator("//select[@class='product_sort_container']").selectOption({ value: "hilo" });
  // await page.locator("//select[@class='product_sort_container']").selectOption({ index: 3 });
  // await page.locator("//select[@class='product_sort_container']").selectOption({ label: "Price (high to low)" });
  await page.locator("//select[@class='product_sort_container']").selectOption("Price (high to low)");

  await page.waitForTimeout(10000);
});