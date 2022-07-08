const burger = '#react-burger-menu-btn'
const logoutButton = '#logout_sidebar_link'
const addToCart = "#add-to-cart-sauce-labs-backpack"
const removeFromCart = "#remove-sauce-labs-backpack"
const goToCart = ".shopping_cart_link"

const productsPage = {
    logout: async (page) =>{
        await page.click(burger);
        await page.click(logoutButton)         
 },
    addProduct: async (page) =>{
        await page.click(addToCart);                
 },
    removeProduct: async (page) =>{
        await page.click(removeFromCart)
},
    seeCart: async (page) =>{
        await page.click(goToCart)   
}
}
export default productsPage