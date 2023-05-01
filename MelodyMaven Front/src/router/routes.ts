import LoginPage from "../page/LoginPage"
import MainPage from "../page/MainPage"
import SigninPage from "../page/SigninPage"


const router = [
    { path: '/', component: MainPage },
    { path: '/login', component: LoginPage },
    { path: '/signin', component: SigninPage }
]

export default router