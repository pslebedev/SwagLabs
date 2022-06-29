const locAuth = 'text=Products'
const LogOutBut = "#login-button"
const catBadge = ".shopping_cart_badge"
const compHeader = ".complete-header"

const assertloc = {
    getLogin: async(page) => {
    const locator = await page.locator(locAuth);
        return locator
    },    
    getLogOut: async(page) => {
        const locator = await page.locator(LogOutBut);
            return locator
    },
    getAddProduct: async(page) => {
        const locator = await page.locator(catBadge);
            return locator
    },
    getBuyProduct: async(page) => {
        const locator = await page.locator(compHeader);
            return locator
    }
}
export default assertloc