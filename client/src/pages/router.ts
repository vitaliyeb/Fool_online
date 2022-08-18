import {FC} from "react";
import {ROUTES} from "../constants/routes";

import Login from "./Login/Login";
import SignIn from "./SignIn/SignIn";
import Layout from "../components/Layout/Layout";
import Menu from "./Menu/Menu";

export interface IPage {
    path: ROUTES;
    component: FC<any>;
    isProtected: boolean;
    layout: typeof Layout | null;
    title: string;
}

export const routes: Array<IPage> = [
    {
        path: ROUTES.LOGIN,
        component: Login,
        isProtected: false,
        layout: Layout,
        title: 'Вход'
    },
    {
        path: ROUTES.SIGN_UP,
        component: SignIn,
        isProtected: false,
        layout: Layout,
        title: 'Регистрация'
    },
    {
        path: ROUTES.LOGIN,
        component: Menu,
        isProtected: true,
        layout: Layout,
        title: 'Меню'
    }
]
