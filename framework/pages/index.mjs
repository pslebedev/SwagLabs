import authPage from './authPage.mjs'
import productsPage from './productsPage.mjs'

const app =() => ({
    Auth: () => ({...authPage}),
    ProductsPage:() => ({...productsPage}),
    BuyProduct:() => ({...buyProduct})
    
})

export default app