// @ts-check

const { test, expect } = require("@playwright/test");

test.beforeAll(async () => {
  console.log("This is beforeAll hook")
});
test.beforeEach(async () => {
  console.log("This is beforeEach hook")
});
test.afterAll(async () => {
  console.log("This is afterAll hook")
});
test.afterEach(async () => {
  console.log("This is afterEach hook")
});

test("This is first test", async () => {
  console.log("This is TEST 1")
});
test("This is second test", async () => {
  console.log("This is TEST 2")
});