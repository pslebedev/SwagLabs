
const { test, expect } = require('@playwright/test');



    test ('Авторизоваться стандартным  пользователем', async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.click('#user-name');
        await page.fill('#user-name', 'standard_user');
        await page.click('#password');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.locator('text=Products');        
        const welcomeText = await page.locator('text=Products');
        await expect(welcomeText).toContainText('Products')
    });
test('Разлогиниться стандартным  пользователем', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
        await page.click('#user-name');
        await page.fill('#user-name', 'standard_user');
        await page.click('#password');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.click('#react-burger-menu-btn')
        await page.click('#logout_sidebar_link');
        const locator = await page.locator("#login-button");
        await expect(locator).toBeVisible()
    
    });
    test('Положить товар в корзину', async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.click('#user-name');
        await page.fill('#user-name', 'standard_user');
        await page.click('#password');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.click("#add-to-cart-sauce-labs-backpack")
        const locator2 = await page.locator(".shopping_cart_badge")
        await expect(locator2).toContainText('1')
             });    

     test('Убрать товар из корзины', async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.click('#user-name');
        await page.fill('#user-name', 'standard_user');
        await page.click('#password');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.click("#add-to-cart-sauce-labs-backpack")
        await page.click("#remove-sauce-labs-backpack")
        const locator2 = await page.locator(".shopping_cart_badge")
        await expect(locator2).toBeHidden()
             });

    test('Совершить покупку', async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.click('#user-name');
        await page.fill('#user-name', 'standard_user');
        await page.click('#password');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await page.click('#add-to-cart-sauce-labs-backpack')
        await page.click(".shopping_cart_link")
        await page.click("#checkout")
        await page.click('#first-name');
        await page.fill('#first-name', 'student')
        await page.click('#last-name');
        await page.fill('#last-name', 'otus')
        await page.click('#postal-code');
        await page.fill('#postal-code', 'student@otus.ru')
        await page.click('#continue');
        await page.click('#finish')
        const locator2 = await page.locator(".complete-header")
        await expect(locator2).toContainText('THANK YOU FOR YOUR ORDER')
             });

     
             
            
      

