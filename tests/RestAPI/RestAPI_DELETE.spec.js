// @ts-check

const { test, expect } = require("@playwright/test");
const { exec } = require("child_process");
const exp = require("constants");
const { request } = require("http");

test("Delete a new post", async ({ request,  }) => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const res = await request.delete(url);
  expect(res.status()).toBe(200);

  const resHeaders = res.headers();
  expect(resHeaders["content-type"]).toContain("application/json");
});