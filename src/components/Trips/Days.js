import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../../components/Common/Navbar";
import {getTemplate} from "../../service/template.service"
import Footer from "../../components/Common/Footer"

function Days() {
    const { type } = useParams();
    const { push } = useHistory();
    const handleClick = async(e)=> {
      const {value: days} = e.target;
      const {data: template} = await getTemplate(type, days);
      push({
        pathname: "/template", 
        state: template
      }); 
    };
  return (
      <>
      <Navbar />
        <div>
          <h2> Welcome to Trippin</h2>
        </div>
        <div>
          <p>¿Cuantos días vas a viajar?</p>
          <button  value="3" name="days3" onClick= {handleClick}>3 días</button>
          <button  value="7" name="days7" onClick= {handleClick}>7 días</button>
        </div>
        <Footer />
    </>
  );
}
export default Days;