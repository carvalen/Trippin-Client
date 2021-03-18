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
        <Link to="/Days">Mar</Link>
        <Link to="/Days">Montaña</Link>
        <Link to="/Days">Camping</Link>
        <Link to="/Days">Nieve</Link>
      </div>
    </>
  );
}

export default Home;
