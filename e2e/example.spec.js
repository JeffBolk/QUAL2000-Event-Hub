// @ts-check
// Jeffrey Bolk
// 2026-04-23
// Playwright Tests

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});

test("test button click", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Events", exact: true }).click();
  await page.getByRole("link", { name: "Log In" }).click();
  await page.getByRole("link", { name: "Register" }).click();
  await page.getByRole("link", { name: "Create Account" }).click();
  await page.getByRole("link", { name: "Live Guide Event Hub" }).click();
  await page.getByRole("link", { name: "Log In To Manage Events" }).click();
  await page.getByRole("link", { name: "Create New Account" }).click();
  await page.getByRole("link", { name: "Already Have An Account?" }).click();
  await page.getByRole("link", { name: "Live Guide Event Hub" }).click();
  await page.getByRole("link", { name: "See All Events" }).click();
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Admin Dashboard" }).click();
  await page.getByRole("link", { name: "Return To Public Site" }).click();
});

test("admin login success", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Admin Dashboard" }).click();
  await page.getByRole("textbox", { name: "Admin Username" }).click();
  await page.getByRole("textbox", { name: "Admin Username" }).fill("admin");
  await page.getByRole("textbox", { name: "Admin Password" }).click();
  await page.getByRole("textbox", { name: "Admin Password" }).fill("Admin123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page
    .locator(
      "tr:nth-child(8) > td:nth-child(6) > .table-actions > .button-secondary",
    )
    .click();
  await page.getByRole("spinbutton", { name: "Available Slots" }).click();
  await page.getByRole("spinbutton", { name: "Available Slots" }).click();
  await page.getByRole("spinbutton", { name: "Available Slots" }).fill("2");
  await page.getByRole("button", { name: "Save Changes" }).click();
  await page.getByRole("button", { name: "Log Out" }).click();
});

test("admin login fail", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Admin Dashboard" }).click();
  await page.getByRole("textbox", { name: "Admin Username" }).click();
  await page.getByRole("textbox", { name: "Admin Username" }).fill("someuser");
  await page.getByRole("textbox", { name: "Admin Password" }).click();
  await page.getByRole("textbox", { name: "Admin Password" }).fill("somepw");
  await page.getByRole("button", { name: "Sign In" }).click();
});

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Admin Dashboard" }).click();
  await page.getByRole("textbox", { name: "Admin Username" }).click();
  await page.getByRole("textbox", { name: "Admin Username" }).fill("admin");
  await page.getByRole("textbox", { name: "Admin Password" }).click();
  await page.getByRole("textbox", { name: "Admin Password" }).fill("Admin123");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "Edit" }).nth(3).click();
  await page.getByRole("textbox", { name: "Category" }).click();
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).press("ArrowLeft");
  await page.getByRole("textbox", { name: "Category" }).fill("Some Technology");
  await page.getByRole("textbox", { name: "Event Date" }).fill("2026-08-26");
  await page.getByRole("button", { name: "Save Changes" }).click();
  await page.getByRole("button", { name: "Log Out" }).click();
  await page.getByRole("link", { name: "Return To Public Site" }).click();
});

test("user login fail", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Log In", exact: true }).click();
  await page.getByRole("textbox", { name: "Email Address" }).click();
  await page.getByRole("textbox", { name: "Email Address" }).fill("abcde");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("12345");
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByRole("textbox", { name: "Email Address" }).click();
  await page
    .getByRole("textbox", { name: "Email Address" })
    .fill("abcde@abc.com");
  await page.getByRole("button", { name: "Log In" }).click();
});
