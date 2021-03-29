import React from 'react';
import {useLocation, useHistory} from "react-router-dom";
import Navbar from "../Common/Navbar";
import {createList} from "../../service/list.service";
import Footer from "../../components/Common/Footer";
import "./Trips.css";

export default function TemplateResult() {
    const { state } = useLocation();
    const { type, days, items } = state[0];
    const { push } = useHistory();
    const createListHandle = async ()=> {
        await createList ({ type, days, items });
        push("/profile");
    }
    return (
<>

        <div>
       <Navbar />
       <div className= "container-content">
       {/* <img alt="foto-plantilla" src="/images/foto-template.jpg" /> */}
       <div className= "box-listado"> <h2>Tu lista predeterminada:</h2><br/><hr/><br/>
            <p>Según tu elección de tipo de viaje {type} y una duración estimada de {days} días. Añadela a tu perfil dónde podrás editarla o crear la tuya propia.</p><br/>
            <br/>
            <ul>
                {items && items.map(item => <li key="{item}">{item}</li>)}
            </ul>
        </div>
        <div><p>¿Te gustaría añadirlo a tu perfil?</p><br/>
          <button onClick={createListHandle}>Añadir</button></div>
          </div></div>
          <Footer />
        </>
    )
}
