import authPage from './authPage.mjs'

const app =() => ({
    Auth: () => ({...authPage}),
    // LogOut:() => ({})
})

export default app