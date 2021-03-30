import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../../components/Common/Navbar";
import {getTemplate} from "../../service/template.service";
import Footer from "../../components/Common/Footer";
import "./Trips.css";

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
      <div className= "container-content">
      <video src="/videos/video-days.mp4" autoPlay loop muted />
        <div className= "container-days">
          <h2> ¿Cuál es la duración de tu viaje?</h2>
        </div>
        <div className= "days">
          
          <button  className="buttoms-days" value="3" name="days3" onClick= {handleClick}>Viaje corto</button>
          <button  className="buttoms-days" value="7" name="days7" onClick= {handleClick}>Viaje largo</button>
        </div>
        </div>
        
        <Footer />
    </>
  );
}
export default Days;