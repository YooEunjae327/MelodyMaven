import LoginPage from "../page/LoginPage"
import MainPage from "../page/MainPage"
import SignUpPage from "../page/SignUpPage"


const router = [
    { path: '/', component: MainPage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage }
]

export default router