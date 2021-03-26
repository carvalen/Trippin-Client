import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Common/Navbar"
import "./home.css"
import Footer from "../../components/Common/Footer"

function Home() {
    // const 
  return (
    <>
<div><Navbar /></div>
      <div key="container" className="home-container">
      <img className ="img-main" src="./images/fondo.jpeg" alt="fondo"/>
      <div className="home-text">
        <h1 className="welcome-main-title"> Bienvenid@!</h1>
        <h2 className="welcome-second-title">¿Cómo funciona Trippin?</h2>
        <p className="welcome-how">Elige más abajo el tipo de destino de tu viaje, el próximo paso será elegir la duración y se generará una lista de 
        items imprescindibles que podrás guardar en tu perfil y editarla o eliminarla. También podrás crear una lista nueva!</p>
      </div>
      </div>
      <div className="home-page">
        <h2 className="title-destiny">Elige tu tipo de destino:</h2>
        <div className="links-container">
        <Link to="/mar/days"><div className="container-image"><img alt="mar" src="./images/mar.jpg"/><div className="image-text">MAR</div></div></Link>
        <Link to="/rural/days"><div className="container-image"><img alt="rural" src="./images/rural.jpg"/><div className="image-text">RURAL</div></div></Link>
        <Link to="/camping/days"><div className="container-image"><img alt="camping" src="./images/camping.JPG"/><div className="image-text">CAMPING</div></div></Link>
        <Link to="/nieve/days"><div className="container-image"><img alt="mar" src="./images/nieve.jpg"/><div className="image-text">NIEVE</div></div></Link>
      </div>
      </div>
      <div><Footer /></div>
    </>
  );
}

export default Home;
