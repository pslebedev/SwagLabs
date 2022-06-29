import authPage from './authPage.mjs'
import productsPage from './productsPage.mjs'
import buyProduct from './BuyProduct.mjs'

const app =() => ({
    Auth: () => ({...authPage}),
    ProductsPage:() => ({...productsPage}),
    BuyProduct:() => ({...buyProduct})
    
})

export default app