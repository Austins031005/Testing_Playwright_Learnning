import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
    xpathUN = "#username";
    xpathPW = "#pass";
    xpathBtnLogin = "#buttonLogin";

    constructor(page: Page) {
        super(page);
    }
    async navigateToLoginPage() {
        await this.navigateTo('url_login');
    }

    async fillUN(username: string) {
        await this.page.locator(this.xpathUN).fill(username);
    }
    async fillPW(password: string) {
        await this.page.locator(this.xpathPW).fill(password);
    }
    async btnLogin() {
        await this.page.locator(this.xpathBtnLogin).click();
    }
    async Login(username: string, password: string) {
        await this.fillUN(username);
        await this.fillPW(password);
        await this.btnLogin();
    }

}