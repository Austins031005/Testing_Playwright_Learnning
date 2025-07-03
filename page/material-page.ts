import { Page } from "@playwright/test";
export class MaterialPage {
    page: Page;
    xpathRegisterPage: string;

    constructor(page: Page) {
        this.page = page;
    }

    async openMaterialPage() {
        await this.page.goto("https://material.playwrightvn.com/");
    }

    async navigateToRegister(pageName: string) {
        await this.page.locator(`//a[contains(text(), '${pageName}')]`).click();
    }
}