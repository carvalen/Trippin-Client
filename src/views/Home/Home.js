import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Trippin</h2>
      <Link to="/signup">Registrarse</Link>
      <Link to="/login">Iniciar Sesión</Link>
    </div>
  );
}

export default Home;