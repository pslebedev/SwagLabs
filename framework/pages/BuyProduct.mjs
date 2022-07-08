import {urls} from '../config/index.mjs'
const checkout = "#checkout"
const firstName = '#first-name'
const lastName = '#last-name'
const postalCode = '#postal-code'
const continueButton = '#continue'
const finish = '#finish'

const buyProduct = {
    buy: async (page) =>{
        await page.goto(urls.cartPage)
        await page.click(checkout);        
        await page.click(firstName);
        await page.fill(firstName, 'student')
        await page.click(lastName);
        await page.fill(lastName, 'otus')
        await page.click(postalCode);
        await page.fill(postalCode, 'student@otus.ru')
        await page.click(continueButton);
        await page.click(finish)     
 }
}
export default buyProduct