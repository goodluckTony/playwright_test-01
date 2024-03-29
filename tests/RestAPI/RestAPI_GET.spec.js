// @ts-check

const { test, expect } = require("@playwright/test");
const { request } = require("http");

test("Testing rest api with get method", async ({ request }) => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const response = await request.get(url);
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.userId).toBe(1);
  expect(responseBody.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
});
