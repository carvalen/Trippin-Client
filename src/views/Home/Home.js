import React from "react";
import { Link } from "react-router-dom";
// import {useList} from "../../context/ListContext"



function Home() {
    // const 
  return (
    <>
      <div>
        <h2> Welcome to Trippin</h2>
      </div>
      <div>
        Elige tu tipo de destino:
        <Link to="/mar/days">Mar</Link>
        <Link to="/montana/days">Montaña</Link>
        <Link to="/camping/days">Camping</Link>
        <Link to="/nieve/days">Nieve</Link>
      </div>
    </>
  );
}

export default Home;
