import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Common/Navbar";

function Days() {
  return (
      <>
      <Navbar />
   <div>
      <h2> Welcome to Trippin</h2>
      
    </div>
    <div>
 ¿Cuantos días vas a viajar?
        <Link to="/Profile">3 días</Link>
        <Link to="/Profile">7 días</Link>
        
    </div>
    </>
  );
}

export default Days;