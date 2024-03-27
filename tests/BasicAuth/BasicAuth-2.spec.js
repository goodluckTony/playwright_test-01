// @ts-check

const { test, expect } = require("@playwright/test");
const { buffer } = require("stream/consumers");

test("Basic auth tech", async ({ page }) => {
  // defined the basic auth credentials
  const userName = "admin";
  const password = "admin";

  // encode the credentials as base64 string
  const base64Credentials = Buffer.from(`${userName}:${password}`).toString("base64");

  // Setup the request interceptor to handle basic auth
  await page.route("**/*", (route) => {
    const headers = {
      "Authorization": `Basic ${base64Credentials}`,
    };
    route.continue({ headers });
  });
  await page.goto("https://the-internet.herokuapp.com/basic_auth");
  const txt = await page.locator("div[class='example'] p").textContent();
  expect(txt).toContain("Congratulations");

  await page.waitForTimeout(10000);
});
