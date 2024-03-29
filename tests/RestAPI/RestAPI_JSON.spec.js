// @ts-check

const { test, expect } = require("@playwright/test");
const { request } = require("http");

test("Asserting complex json response", async ({ page,  }) => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const res = await page.request.get(url);
  await expect(res).toBeOK();

  const users = await res.json();
  await expect(users.length).toBeGreaterThan(0);

  await expect(users[0].id).toBe(1);

});