import { test, expect } from "@playwright/test";

test("Tracing", async ({ page, context }) => {

  await context.tracing.start({ screenshots: true, snapshots: true });

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
  
  await context.tracing.start({ path: 'tracing.zip' });
});