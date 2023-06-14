import LoginPage from "../page/LoginPage"
import MainPage from "../page/MainPage"
import MainResultArtistPage from "../page/MainResultArtistPage"
import SignUpPage from "../page/SignUpPage"


const router = [
    { path: '/', component: MainPage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage },
    { path: '/', component: MainResultArtistPage}
]

export default router