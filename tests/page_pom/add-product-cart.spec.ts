import { expect, test } from '@playwright/test'
import { ProductPage } from '../../page/product-page';

test("Test With POM", async ({ page }) => {
    const products = [
        { name: "Product 1", quantity: 2 },
        { name: "Product 2", quantity: 3 },
        { name: "Product 3", quantity: 1 }
    ];
    
    const productPage = new ProductPage(page);

    await test.step("Navigate to Product page", async () => {
        await productPage.navigateToHome();
        await productPage.navigateToProduct();
    });

    await test.step("Add products to cart", async () => {
        await productPage.addProductsToCart(products);
    });

    await test.step("Verify cart quantities", async () => {
        await productPage.verifyCartQuantities(products);
    });

    await test.step("Verify total items count", async () => {
        const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
        await productPage.verifyTotalItems(totalItems);
    });

    await test.step("Verify total price", async () => {
        await productPage.verifyTotalPrice();
    });
});