const usenameField = '#user-name'
const passwordField = '#password'
const loginButton = '#login-button'



const authPage = {
    login: async (page,link, username, pasword) =>{
        await page.goto(link)
        await page.click(usenameField);
        await page.fill(usenameField, username);
        await page.click(passwordField);
        await page.fill(passwordField, pasword);
        await page.click(loginButton);         
 }
}
export default authPage