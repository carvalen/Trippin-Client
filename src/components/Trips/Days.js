import React from "react";
import { Link } from "react-router-dom";

function Days() {
  return (
      <>
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