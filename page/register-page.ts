import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class RegisterPage extends BasePage {
    xpathUsername = "//input[@id='username']";
    xpathEmail = "//input[@id='email']";
    xpathGender = "//input[@id='male']";
    xpathHobbies = "//input[@id='traveling']";
    xpathCountry = "//select[@id='country']";
    xpathBirth = "//input[@id='dob']";
    xpathBtnRegister = "//button[normalize-space()='Register']";
    xpathImage = "//input[@id='profile']";

    constructor(page: Page) {
        super(page);
    }
    async navigateToRegisterPage() {
        await this.navigateTo("https://material.playwrightvn.com/01-xpath-register-page.html");
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    }
    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    }
    async SetGender() {
        await this.page.locator(this.xpathGender).setChecked(true);
    }
    async fillHobbies() {
        await this.page.locator(this.xpathHobbies).setChecked(true);
    }
    async fillCountry(country: string) {
        await this.page.selectOption(this.xpathCountry, country);
    }
    async fillDayOfBirth(birth: string) {
        await this.page.locator(this.xpathBirth).fill(birth);
    }
    async btnRegister() {
        await this.page.locator(this.xpathBtnRegister).click();
    }
    async chooseFile(image: string) {
        await this.page.locator(this.xpathImage).setInputFiles(image);
    }
    // async Register(username: string, email: string, country: string, birth: string) {
    //     await this.fillUsername(username);
    //     await this.fillEmail(email);
    //     await this.SetGender();
    //     await this.fillHobbies();
    //     await this.fillCountry(country);
    //     await this.fillDayOfBirth(birth);
    //     await this.btnRegister();
    // }

}