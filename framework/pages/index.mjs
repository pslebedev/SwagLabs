import authPage from './authPage.mjs'
import productsPage from './productsPage.mjs'
import buyProduct from './BuyProduct.mjs'
import assertloc from '../elements/elements.mjs'

const app =() => ({
    Auth: () => ({...authPage}),
    ProductsPage:() => ({...productsPage}),
    BuyProduct:() => ({...buyProduct}),
    assertloc : () =>({...assertloc})
})

export default app