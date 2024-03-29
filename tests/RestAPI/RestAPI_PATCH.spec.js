// @ts-check

const { test, expect } = require("@playwright/test");
const { request } = require("http");

test("Partly update a new post", async ({ request,  }) => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const res = await request.patch(url, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    data: {
      title: 'foo',
    },
  });

  expect(res.status()).toBe(200);

  const resData = await res.json();
  expect(resData.title).toBe("foo");

  const resHeaders = res.headers();
  expect(resHeaders["content-type"]).toContain("application/json");
});