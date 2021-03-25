import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

function Welcome() {
  return (
    <>
      <div className="container">
        <video src="videos/video-1.mp4" autoPlay loop muted />
        <h1>Trippin</h1>
        <p>¿No sabes que llevar a tu próximo viaje?</p>
        <p>
          Te ayudamos a organizar lo imprescindible con listados predeterminados
          segun tu tipo de viaje y duración
        </p>

        {/* <nav className="welcome-nav"><a href="/"><img src="./images/maleta_dibujo.png" alt="logo"/></a></nav> */}
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
