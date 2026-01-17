import { createBrowserRouter } from "react-router";
import { Home } from "./pages/homeKanary/home";
import { RecoveryPass } from "./pages/access/RecoveryPass";
import { Register } from "./pages/access/Register";
import { AppLayout } from "./pages/app/AppLayout"
import { Dashboard } from "./pages/app/Dashboard";
import { AccessLayout } from "./pages/access/AccessLayout";
import { Login } from "./pages/access/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/access",
        Component: AccessLayout,
        children: [
            {
                index: true,
                path: "/access/login",
                Component: Login,
            },
            {
                path: "/access/recoverypass",
                Component: RecoveryPass,
            },
            {
                path: "/access/register",
                Component: Register,
            },
        ]
    },    
    {
        path: "/app",
        Component: AppLayout,
        children: [
            {
                index: true,
                Component: Dashboard,
            },
        ]
    },
    
])





