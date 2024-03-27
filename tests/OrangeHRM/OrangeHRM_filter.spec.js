import { test, expect } from "@playwright/test";

test("Filtering locators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/"
  );
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  
  // filter by text
  // await page.getByRole('listitem').filter({ hasText: /Leave/ }).click();
  // filter by child
  await page.getByRole('listitem').filter({ has: page.getByRole('link', { name: 'Leave2' }) }).click();
  
  await page.waitForTimeout(10000);
});

// npx playwright test -g "Filtering locators" --headed --trace