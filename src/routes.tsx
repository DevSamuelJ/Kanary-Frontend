import { createBrowserRouter } from "react-router";
import { Home } from "./pages/homeKanary/home";
import { Register } from "./pages/access/register";
import { AppLayout } from "./pages/app/app-layout"
import { Dashboard } from "./pages/app/dashboard";
import { AccessLayout } from "./pages/access/access-layout";
import { Recover } from "./pages/access/recover";
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
                path: "/access/recover",
                Component: Recover,
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





