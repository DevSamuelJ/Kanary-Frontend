import { createBrowserRouter } from "react-router";
import { Register } from "./pages/access/register";
import { AppLayout } from "./pages/app/app-layout"
import { Dashboard } from "./pages/app/dashboard";
import { AccessLayout } from "./pages/access/access-layout";
import { Recover } from "./pages/access/recover";
import { Login } from "./pages/access/login";
import { Board } from "./pages/app/board";
import { Equipe } from "./pages/app/team";
import { Projeto } from "./pages/app/project";
import { Opcoes } from "./pages/app/settings";
import { Home } from "./pages/homeKanary/home";

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
            {
                path: "board",
                Component: Board,
            },
            {
                path: "equipe",
                Component: Equipe,
            },
            {
                path: "projeto",
                Component: Projeto,
            },
            {
                path: "opcoes",
                Component: Opcoes,
            },
        ]
    },
    
])
