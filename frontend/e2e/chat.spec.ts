import { expect, test } from "@playwright/test";

test("sends a message and displays a care response", async ({ page }) => {
  await page.route("/api/chat", async (route) => {
    await route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ reply: "Based on what you shared, a Dentist is the right place to start." }),
    });
  });

  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Shifa International Hospital" })).toBeVisible();
  await expect(page.getByText("24/7 emergency care")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Karachi location" })).toBeVisible();
  await page.getByLabel("Your message").fill("I have a toothache");
  await page.getByRole("button", { name: "Send" }).click();
  await expect(page.getByText("Dentist is the right place to start")).toBeVisible();
});
