import React, {useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../../components/Common/Navbar";
import {getTemplate} from "../../service/template.service"

function Days() {

    const[state, setState] = useState({type:"", days:""})
    const {type}= useParams();
    const handleClick = async(e)=> {
        
        const {value}= e.target
        setState({type:type, days:value})
        const {data} = await getTemplate(state.type, state.days)
        useHistory.push({pathname: "/template", state: data })
    };
  return (
      <>
      <Navbar />
   <div>
      <h2> Welcome to Trippin</h2>
      
    </div>
    <div>
 ¿Cuantos días vas a viajar?
        <button  value="3" name="days3" onClick= {handleClick}>3 días</button>
        <button  value="7" name="days7" onClick= {handleClick}>7 días</button>
        
    </div>
    </>
  );
}

export default Days;