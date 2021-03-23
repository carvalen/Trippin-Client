import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css"


function Welcome() {
     
  return (
    <>

      
      <nav className="welcome-nav"><img src="./images/maleta_dibujo.png" alt="logo"/></nav>
      <div className="welcome"><Link to="/Signup">Registrarse</Link></div>
      <div className= "welcome-2"><Link to="/login">Iniciar Sesión</Link></div>
      
    </>
  );
}

export default Welcome;