import React from 'react';
import {useLocation} from "react-router-dom";
import Navbar from "../Common/Navbar";

export default function TemplateResult() {
    const { state } = useLocation();
    const { type, days, items } = state[0];
    
    return (
<>
        <div>
       <Navbar />
            <h2>Templates</h2>
            <h4>Plantilla para tipo {type} y duración {days} días</h4>
            <ul>
                {items && items.map(item => <li key="{item}">{item}</li>)}
            </ul>
        </div>
        <div><p>¿Te gustaría añadirlo a tu perfil?</p>
          <button to= "/profile">Añadir</button></div>
        </>
    )
}
