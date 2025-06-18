import  { test } from '@playwright/test';
test('TestCase Login', async ({page}) =>{
    //code của test
    await test.step('Navigate to Metadata', async()=>{
        await page.goto('https://metadata.oryza.io.vn/');
    })

    await test.step('Fill information: Emmail, Password', async()=>{
        await page.locator("//input[@id='username']").pressSequentially("phamquan100503", {
            delay: 100
        });
        await page.locator("//input[@id='password']").pressSequentially("111111", {
            delay: 100
        });
    })

    await test.step('Click button Login', async()=>{
        await page.locator("//button[@id='kc-login']").click();
    })
})
