import { test, expect } from '@playwright/test';

test('Add Todo Item', async ({ page }) => {

    await test.step('Step 1: Truy cập trang https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Step 2: click vào “Bài học 3: Todo page”.', async () => {
        await page.locator('//a[contains(text(),"Bài học 3: Todo page")]').click();
    });

    await test.step('Step 3: Thêm mới 100 todo item có nội dung Todo "<i>".', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill("Todo " + i);
            await page.locator('//button[@id="add-task"]').click();
        }
    });

    await test.step('Step 4: oá các todo có số lẻ', async () => {
        const browserPopup = async (dialog) => { await dialog.accept(); } // add type gì cho dialog giờ bà con :D
        page.on('dialog', browserPopup);
        for (let i = 1; i <= 100; i++) {
            if (i % 2 == 1) {                
                await page.locator('//span[text()="Todo ' + i + '"]//following-sibling::div//button[text()="Delete"]').click();
                //page.off('dialog', browserPopup);
            }
        }
    });
});