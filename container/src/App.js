import React, {lazy, Suspense, useState} from "react";
import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));

import {Router, Route, Switch, Redirect} from "react-router-dom";
import Progress from "./components/Progress";
import  {createBrowserHistory} from 'history';
import { useEffect } from "react";

const history = createBrowserHistory();
export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(()=>{
        if(isSignedIn){
            history.push('/dashboard');
        }
    },[isSignedIn])

    return (
    <Router history={history}>    
    <div>
      <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
      <hr/>
       <Suspense fallback={<Progress />}>
        <Switch>
            <Route  path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/" />}
              <DashboardLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route  path="/" component={MarketingLazy} />

        </Switch>
         </Suspense>
    </div>
    </Router>
    )
}