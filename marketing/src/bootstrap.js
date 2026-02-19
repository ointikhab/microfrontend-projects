
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount the main App component to the DOM

const mount = (el)=>{
    ReactDOM.render(<App />, el)
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#marketing-dev-root');
    if(el){
        mount(el);
    }
}
console.log('hi there from marketing page');

export {mount}