import React, {FC, useEffect, useLayoutEffect, useState} from "react";
import {Router} from "react-router-dom";
import {BrowserHistory} from "history";


const CustomRouter: FC<{children: React.ReactNode ,history: BrowserHistory}> = ({ history, ...props }) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location
    });

    useLayoutEffect(() => history.listen(setState), [history]);
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, [history.location.pathname]);

    return (
        <Router
            {...props}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
};


export default CustomRouter;