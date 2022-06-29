import app from '../framework/pages/index.mjs'
import { test, expect } from '@playwright/test';

    test('Авторизоваться стандартным  пользователем', async ({page}) => {
        await app().Auth().login(page)                    
        const welcomeText = await page.locator('text=Products');
        await expect(welcomeText).toContainText('Products')
    });
    test('Разлогиниться стандартным  пользователем', async ({page}) => {
        await app().Auth().login(page)
        await app().ProductsPage().logout(page)
        const locator = await page.locator("#login-button");
        await expect(locator).toBeVisible()
    
    });
    test('Положить товар в корзину', async ({page}) => {
        await app().Auth().login(page)
        await app().ProductsPage().addProduct(page)        
        const locator2 = await page.locator(".shopping_cart_badge")
        await expect(locator2).toContainText('1')
             });    

     test('Убрать товар из корзины', async ({page}) => {
        await app().Auth().login(page)
        await app().ProductsPage().addProduct(page)
        await app().ProductsPage().removeProduct(page)
        const locator2 = await page.locator(".shopping_cart_badge")
        await expect(locator2).toBeHidden()
             });

    test('Совершить покупку', async ({page}) => {
        await app().Auth().login(page)
        await app().ProductsPage().addProduct(page)
        await app().ProductsPage().seeCart(page)
        await app().BuyProduct().buy(page)
        const locator2 = await page.locator(".complete-header")
        await expect(locator2).toContainText('THANK YOU FOR YOUR ORDER')
             });

     
             
            
      

