import { test } from '@playwright/test'
import { RegisterPage } from '../../page/register-page'

test("Test With POM", async ({ page }) => {
    const Register = new RegisterPage(page);

    await test.step("Navigate to Register", async () => {
        await Register.navigateToRegisterPage()
    })
    await test.step("Fill information Register", async () => {
        await Register.fillUsername("phamquank15");
        await Register.fillEmail("phamquan@gmail.com");
        await Register.SetGender();
        await Register.fillHobbies();
        await Register.fillCountry("usa");
        await Register.fillDayOfBirth("2025-03-15");
        await Register.chooseFile('test-data/hinh-anh-cute-avatar-vo-tri-3.jpg');
        await Register.btnRegister();
    })

})

