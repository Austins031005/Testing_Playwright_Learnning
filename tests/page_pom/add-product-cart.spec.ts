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
})


