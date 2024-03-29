const { test, expect } = require("@playwright/test");

test("Create a new post", async ({ request }) => {
  const res = await request.post("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    data: {
      title: "this is new post",
      body: "this is a body",
      userId: 1,
    },
  });

  expect(res.status()).toBe(201);

  const resData = await res.json();
  expect(resData.title).toBe("this is new post");

  const resHeaders = res.headers();
  expect(resHeaders["content-type"]).toContain("application/json");
});
