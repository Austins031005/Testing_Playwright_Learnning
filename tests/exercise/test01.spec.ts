import  { test } from '@playwright/test';
const date= "2025-03-15";
const username= "phamquan";
const email= "austins1523@gmail.com";
const description= "PW VN2025";
const country= "usa";

test('TestCase Test01', async ({page}) =>{
    //code của test
    await test.step('Navigate to material.playwrightvn.com', async()=>{
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Click Bài học 1: Register page', async()=>{
        await page.locator("a[href='01-xpath-register-page.html']").click();
    })

    await test.step('Fill các trường thông tin', async()=>{
        await page.locator("//input[@id='username']").pressSequentially(username, {
            delay: 100
        });
        await page.locator("//input[@id='email']").pressSequentially(email, {
            delay: 100
        });
        await page.locator("//input[@id='male']").setChecked(true);
        await page.locator("//input[@id='traveling']").setChecked(true);
        await page.selectOption("//select[@id='country']", country);
        
        await page.locator("//input[@id='dob']").fill(date);
        await page.locator("//input[@id='profile']").setInputFiles('test-data/hinh-anh-cute-avatar-vo-tri-3.jpg');
        await page.locator("//textarea[@id='bio']").pressSequentially(description, {
            delay: 100
        });
        //
        await page.locator("//input[@id='dob']").fill(date);

    })
    await test.step('Click button Register', async()=>{
        await page.locator("//button[normalize-space()='Register']").click();
    })
    
    // await test.step('Click button Login', async()=>{
    //     await page.locator("//button[@id='kc-login']").click();
    // })
})
