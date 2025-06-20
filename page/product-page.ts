import { Page } from "@playwright/test";
import { BasePage } from "./base-page";
export class ProductPage extends BasePage {
    xpathProduct = "//a[contains(text(),'Bài học 2: Product page')]";
    constructor(page: Page) {
        super(page);
    }
    async navigateToHome() {
        await this.navigateTo("https://material.playwrightvn.com");
    }
    async navigateToProduct() {
        await this.page.locator(this.xpathProduct).click();
    }
    async addProductsToCart(products) {
        for (const product of products) {
            const { name, quantity } = product;
            for (let i = 0; i < quantity; i++) {
                await this.page.locator(`//div[text()="${name}"]//following-sibling::button[text()="Add to Cart"]`).click();
            }
        }
    }



}