import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import Signup from "./components/Signup";
import Signin from "./components/Signin";

export default ({history, onSignIn}) => {
    return (
        <StylesProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path="/auth/signup">
                        <Signup onSignIn={onSignIn}/>
                    </Route>
                    <Route exact path="/auth/signin">
                        <Signin onSignIn={onSignIn}/>
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    )
}