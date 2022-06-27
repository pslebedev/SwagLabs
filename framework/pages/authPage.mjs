const usenameField = '#user-name'
const passwordField = '#password'
const loginButton = '#login-button'



const authPage = {
    login: async (page, username, pasword) =>{
        await page.goto(page)
        await page.click(usenameField);
        await page.fill(usenameField, username);
        await page.click(passwordField);
        await page.fill(passwordField, pasword);
        await page.click(loginButton);         
 }
}
export default authPage