import { expect, test } from "@playwright/test";

test("Login via API", async ({ request }) => {
  const response = await request.post("http://localhost:3000/login", {
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email: "fulano@qa.com",
      password: "teste",
    },
  });

  expect(response.status()).toBe(200);
});
