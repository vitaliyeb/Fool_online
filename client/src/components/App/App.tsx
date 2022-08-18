import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "../../pages/router";
import { createBrowserHistory } from "history";

import CustomRouter from "../CustomRouter/CustomRouter";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import {ROUTES} from "../../constants/routes";

export const history = createBrowserHistory();

export const App = () => {
    return (
        <CustomRouter history={history}>
            <Routes>
                <Route
                    index
                    element={<Navigate replace to={ROUTES.LOGIN} />}
                />
                {
                    routes.map((page) => <Route
                        key={page.path}
                        path={page.path}
                        element={page.isProtected ?
                            <ProtectedRoute {...page} /> :
                            <PublicRoute {...page} />
                        }
                    />)
                }
            </Routes>
        </CustomRouter>
    )
}