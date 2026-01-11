import { createBrowserRouter } from "react-router";
import { Home } from "./pages/homeKanary/home";
import { Login } from "./pages/access/Login";
import { RecoveryPass } from "./pages/access/RecoveryPass";
import { Register } from "./pages/access/Register";
import { Layout } from "./pages/app/Layout"

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },    
    {
        path: "/login",
        Component: Login,
    },
    {
        path: "/recoverypass",
        Component: RecoveryPass,
    },
    {
        path: "/register",
        Component: Register,
    },
    {
        path: "/Kanary/register",
        Component: Register,
    },
    {
        path: "/Kanary/login",
        Component: Login,
    },
    {
        path: "/Kanary/recoverypass",
        Component: RecoveryPass,
    },
    {
        path: "/Kanary/dashboard",
        Component: Layout,
    }
    
])





