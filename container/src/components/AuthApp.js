import React from "react";
import { useEffect, useRef } from "react";
import {mount} from "auth/AuthApp";
import {useHistory} from "react-router-dom";

export default ({onSignIn}) => {
    const ref = useRef(null);
    const history = useHistory()

    useEffect(()=>{
        const {onParentNavigate} = mount(ref.current, {
                initialPath: history.location.pathname,
                onNavigate: ({pathname: nextPathname})=>{
                    const {pathname} = history.location;
                    if(pathname !== nextPathname){
                        console.log('the container noticed navigation in marketing', nextPathname);
                        history.push(nextPathname);
                    }
                        
                },
                onSignIn: ()=>{
                    console.log('user signed in');
                    onSignIn();
                }
        });
            history.listen(onParentNavigate);
    },[])
    return <div ref={ref}></div>
}