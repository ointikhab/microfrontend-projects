import React from "react";
import { useEffect, useRef } from "react";
import {mount} from "dashboard/DashboardApp";

export default ({onSignIn}) => {
    const ref = useRef(null);
    
    useEffect(()=>{
        mount(ref.current) 
    },[])
    return <div ref={ref}></div>
}