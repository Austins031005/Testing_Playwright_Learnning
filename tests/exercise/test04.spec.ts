import { test, expect } from '@playwright/test';

test('Add Todo Item', async ({ page }) => {
    let title, content;

    await test.step('Step 1: Truy cập trang vnexpress lấy data', async () => {
        await page.goto('https://vnexpress.net/khoa-hoc-cong-nghe', {
            waitUntil: 'domcontentloaded'
        });
        title = await page.locator("//h3[@class='title-news']/a").allTextContents();
        content = await page.locator("//p[@class='description']/a").allTextContents();
        console.log(title);
        console.log(content);
    });
    await test.step('Step 1: Truy cập trang https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Step 2: Tclick vào Bài học 4: Personal notes', async () => {
        await page.locator('//a[contains(text(),"Bài học 4: Personal notes")]').click();
    });

    await test.step('Step 3: Thêm mới note có nội dung là tiêu đề và một phần ngắn tại báo https://vnexpress.net/khoa-hoc-cong-nghe', async () => {
        for(let i= 0; i <= 5; i++){
            await page.locator("//input[@id='note-title']").fill(title[i]);
            await page.locator("//textarea[@id='note-content']").fill(content[i]);
            await page.locator("//button[@id='add-note']").click();
        }
    });
});