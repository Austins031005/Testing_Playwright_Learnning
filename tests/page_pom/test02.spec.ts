import { expect, test } from '@playwright/test'
import { ProductPage } from '../../page/product-page';
test("Test With POM", async ({ page }) => {
    const products = [
        { name: "Product 1", quantity: 2 },
        { name: "Product 2", quantity: 3 },
        { name: "Product 3", quantity: 1 }
    ];
    const product = new ProductPage(page);

    await test.step("Navigate to Product", async () => {
        await product.navigateToHome();
        await product.navigateToProduct();

    })
    await test.step("Add to cart", async () => {
        await product.addProductsToCart(products);
    })
    await test.step('Bước 4: Kiểm tra số lượng sản phẩm trong giỏ hàng', async () => {
        const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
        // Giả định trang hiển thị tổng số lượng trong giỏ hàng
        await expect(page.locator('//div[contains(text(), "Total items in cart")]')).toContainText(`${totalItems}`);
    });

})


