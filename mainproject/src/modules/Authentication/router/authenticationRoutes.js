import Signup from "@/modules/Authentication/views/SignUp.vue"
import Login from "@/modules/Authentication/views/LogIn.vue";
import ForgotPassword from "@/modules/Authentication/views/ForgotPassword.vue";



export const authenticationRoutes = [
    {
        path: "/signup",
        component: Signup
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/ForgotPassword",
        component: ForgotPassword
    }
]

