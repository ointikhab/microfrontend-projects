
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createMemoryHistory, createBrowserHistory} from 'history'

// Mount the main App component to the DOM

const mount = (el, {onNavigate, defaultHistory})=>{
    const history = defaultHistory ||createMemoryHistory();
    if(onNavigate){
     history.listen(onNavigate);
    }
    
    ReactDOM.render(<App history={history} />, el)

    return {
        onParentNavigate({pathname: nextPathname}){
            console.log('Container is navigating to ', nextPathname)
            const {pathname} = history.location;
            if(pathname !== nextPathname){
            history.push(nextPathname);
            }
        }
    }
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#auth-dev-root');
    if(el){
        mount(el, {defaultHistory: createBrowserHistory()});
    }
}
console.log('hi there from auth page');

export {mount}