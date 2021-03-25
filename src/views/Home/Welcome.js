import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

function Welcome() {
  return (
    <>
    <nav className ="navbar-home">
      <div className="navbar-container">
        <Link to='/' className='navbar-logo'>
            TRIPPIN 
           {/* <i className="fas fa-suitcase-rolling"></i> */}
           <i className="fas fa-campground"></i>
        </Link>
      </div>
    </nav>
      <div className="container">
        <video src="videos/video-1.mp4" autoPlay loop muted />
         <h3 className="main-title">¿No sabes que llevar a tu próximo viaje?</h3>
            <p className="main-text">
              Te ayudamos a organizar lo imprescindible según el lugar y la duración de tu viaje con listados predeterminados!
            </p>
      <div className="welcome">
        <Link to="/Signup">Registrarse</Link>
      </div>
      <div className="welcome-2">
        <Link to="/login">Iniciar Sesión</Link>
      </div>
        </div>
    </>
  );
}

export default Welcome;
