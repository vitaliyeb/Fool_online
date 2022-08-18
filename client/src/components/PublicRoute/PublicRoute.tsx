import React, {FC} from "react";
import {IPage} from "../../pages/router";

const PublicRoute: FC<IPage> = (props) => {
    const {
        component: Component,
        layout
    } = props;
    const Layout = layout || React.Fragment

    return <Layout><Component/></Layout>
}

export default PublicRoute;