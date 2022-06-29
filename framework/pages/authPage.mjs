import {creds,urls} from '../config/index.mjs'
const usenameField = '#user-name'
const passwordField = '#password'
const loginButton = '#login-button'

const authPage = {
    login: async (page) =>{
        await page.goto(urls.authPage)
        await page.click(usenameField);
        await page.fill(usenameField, creds.username);
        await page.click(passwordField);
        await page.fill(passwordField, creds.password);
        await page.click(loginButton);         
 }
}
export default authPage