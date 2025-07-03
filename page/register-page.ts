import { Page } from "@playwright/test";
import { MaterialPage } from "./material-page";

export class RegisterPage extends MaterialPage {
    xpathUsername = "//input[@id='username']";
    xpathEmail = "//input[@id='email']";
    xpathGenderMale = "//input[@id='male']";
    xpathGenderFemale = "//input[@id='female']";
    getXpathHobbies(hobby: "reading" | "traveling" | "cooking") {
        return `//input[@id='${hobby}']`;
    }
    xpathInterests = "//select[@id='interests']";
    xpathCountry = "//select[@id='country']";
    xpathBirth = "//input[@id='dob']";
    xpathProfilePicture = "//input[@id='profile']";
    xpathBiography = "//textarea[@id='bio']";
    xpathNewsLetter = "//input[@id='newsletter']";
    xpathBtnRegister = "//button[normalize-space()='Register']";

    constructor(page: Page) {
        super(page);
    }

    async navigateToRegisterPage() {
        await this.openMaterialPage();
        await this.navigateToRegister("Register Page");
    }

    async fillUsername(username: string) {
        await this.page.locator(this.xpathUsername).fill(username);
    }

    async fillEmail(email: string) {
        await this.page.locator(this.xpathEmail).fill(email);
    }

    async checkGender(gender: 'Male' | 'Female') {
        if (gender = 'Male')
            await this.page.locator(this.xpathGenderMale).check();
        if (gender = 'Female')
            await this.page.locator(this.xpathGenderFemale).check();
    }

    async selectInterests(InterestsValue: 'technology' | 'art' | 'science' | 'music' | 'sport') {
        await this.page.selectOption(this.xpathInterests, InterestsValue);
    }

    async checkHobbies(hobby: "reading" | "traveling" | "cooking") {
        await this.page.locator(this.getXpathHobbies(hobby)).check();
    }

    async selectCountry(CountryValue: 'usa' | 'canada' | 'uk') {
        await this.page.selectOption(this.xpathCountry, CountryValue);
    }

    async fillDayOfBirth(birth: string) {
        await this.page.locator(this.xpathBirth).fill(birth);
    }

    async fillBio(bio: string) {
        await this.page.locator(this.xpathBiography).fill(bio);
    }

    async checkNewsLetter() {
        await this.page.locator(this.xpathNewsLetter).check();
    }

    async chooseFile(image: string) {
        await this.page.locator(this.xpathProfilePicture).setInputFiles(image);
    }

    async btnRegister() {
        await this.page.locator(this.xpathBtnRegister).click();
    }
}