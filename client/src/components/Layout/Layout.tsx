import React, {FC} from "react";

const Layout: FC<{children: React.ReactNode}> = ({ children }) => {
    return (<div>
        layout:
        { children }
    </div>)
}

export default Layout;