import { test, expect } from '@playwright/test';

test('Add to Cart', async ({ page }) => {
    let listProducts = [
        { name: "Product 1", quantity: 2 },
        { name: "Product 2", quantity: 3 },
        { name: "Product 3", quantity: 1 }
    ];

    await test.step('Step 1: Truy cập trang https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Step 2: click vào "Bài học 2: Product page"', async () => {
        await page.locator('//a[contains(text(),"Bài học 2: Product page")]').click();
    });

    await test.step('Step 3: hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau: Sản phẩm 1: 2 sản phẩm, Sản phẩm 2: 3 sản phẩm, Sản phẩm 3: 1 sản phẩm"', 
        async () => {
        for (let product in listProducts) {
            for (let i = 1; i <= listProducts[product].quantity; i++) {
                await page.locator('//div[text()="' + listProducts[product].name + '"]//following-sibling::button[text()="Add to Cart"]').click();
                // có cách nào move cái for này ra ngoài test để làm thành 1 function ko ?
            }
        }
    });
});