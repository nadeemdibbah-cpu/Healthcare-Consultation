import { expect, test } from "@playwright/test";

test("sends a message and displays a care response", async ({ page }) => {
  await page.goto("/");
  await page.getByLabel("Your message").fill("I have a toothache");
  await page.getByRole("button", { name: "Send" }).click();
  await expect(page.getByText("Dentist is the right place to start")).toBeVisible();
});
