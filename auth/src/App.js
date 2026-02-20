import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Signup from "./components/Signup";
import Signin from "./components/Signin";

export default ({history}) => {
    return (
        <StylesProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/signup" component={Signup} />
                    <Route exact path="/auth/signin" component={Signin} />
                </Switch>
            </Router>
        </StylesProvider>
    )
}