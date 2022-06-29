import app from '../framework/pages/index.mjs'
import { test, expect } from '@playwright/test';

    test('Авторизоваться стандартным  пользователем', async ({page}) => {
        await app().Auth().login(page)                    
        const welcomeText = await app().assertloc().getLogin(page);
        await expect(welcomeText).toContainText('Products')
    });
    test('Разлогиниться стандартным  пользователем', async ({page}) => {
        await app().Auth().login(page)
        await app().ProductsPage().logout(page)
        const locator =await app().assertloc().getLogOut(page);
        await expect(locator).toBeVisible()
    
    });
    test('Положить товар в корзину', async ({page}) => {
        await app().Auth().login(page)
        await app().ProductsPage().addProduct(page)        
        const locator = await app().assertloc().getAddProduct(page)
        await expect(locator).toContainText('1')
             });    

     test('Убрать товар из корзины', async ({page}) => {
        await app().Auth().login(page)
        await app().ProductsPage().addProduct(page)
        await app().ProductsPage().removeProduct(page)
        const locator = await app().assertloc().getAddProduct(page)
        await expect(locator).toBeHidden()
             });

    test('Совершить покупку', async ({page}) => {
        await app().Auth().login(page)
        await app().ProductsPage().addProduct(page)
        await app().ProductsPage().seeCart(page)
        await app().BuyProduct().buy(page)
        const locator = await app().assertloc().getBuyProduct(page)
        await expect(locator).toContainText('THANK YOU FOR YOUR ORDER')
             });

     
             
            
      

