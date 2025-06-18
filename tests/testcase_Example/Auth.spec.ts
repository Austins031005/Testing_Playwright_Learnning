import { test, expect } from "@playwright/test";

test.describe("Authentication", async () => {
  let xpusername = "//input[@id='user_login']";
  let xppass = "//input[@id='user_pass']";
  let xplogin = "//input[@id='wp-submit']";
  let xperor = "//div[@id='login_error']";
  let xphdDashboard = "//h1[normalize-space()='Dashboard']";
  let xphdAtaGlance = "//h2[normalize-space()='At a Glance']";
  let xphdActivity = "//h2[normalize-space()='Activity']";
  const username = "k13-nhu";
  const pass = "jOzeymSdcu(POP)hritcC7eh";
  const passfail = "123456";
  test.beforeEach(async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin", {
      waitUntil: "domcontentloaded",
    });
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Login-fail", async ({ page }) => {
    await test.step("Step 1: Nhập vào thông tin username, password bị sai", async () => {
      await page.locator(xpusername).fill(username);
      await page.locator(xppass).fill(passfail);

      const atualusername = await page.inputValue(xpusername);
      const atualpass = await page.inputValue(xppass);

      expect(atualusername).toBe(username);
      expect(atualpass).toBe(passfail);
    });
    await test.step("Step 2: Click button Login", async () => {
      await page.locator(xplogin).click();

      const isMsgVisible = await page.locator(xperor).isVisible();
      expect(isMsgVisible).toBeTruthy();
    });
  });
  test("Login-success", async ({ page }) => {
    await test.step("Step 1: Nhập vào thông tin username, password đúng", async () => {
      await page.locator(xpusername).fill(username);
      await page.locator(xppass).fill(pass);

      const atualusername = await page.inputValue(xpusername);
      const atualpass = await page.inputValue(xppass);

      expect(atualusername).toBe(username);
      expect(atualpass).toBe(pass);
    });
    await test.step("Step 2: Click button Login", async () => {
      await page.locator(xplogin).click();

      await expect(page).toHaveURL(/.*wp-admin/);

      await expect(page.locator(xphdDashboard)).toBeVisible();
      await expect(page.locator(xphdAtaGlance)).toBeVisible();
      await expect(page.locator(xphdActivity)).toBeVisible();
    });
  });
});
