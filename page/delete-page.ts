import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class DeleteAccount extends BasePage {
    xpathBtnDelete = "//button[normalize-space()='Delete']";

    constructor(page: Page) {
        super(page);
    }


    async btnDelete() {
        await this.page.locator(this.xpathBtnDelete).click();
    }

}