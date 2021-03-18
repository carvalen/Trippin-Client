import React from 'react';
import {useLocation} from "react-router-dom";


export default function TemplateResult() {
    const {state}=useLocation();
    console.log("state", state);
    return (
        <div>
            <h2>templates</h2>
        </div>
    )
}
