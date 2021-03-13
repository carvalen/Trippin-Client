 import React from "react";
 import { Link } from "react-router-dom";

 function Home() {
   return (
       <>
    <div>
       <h2> Welcome to Trippin</h2>
       
     </div>
     <div>
    Elige tu tipo de destino:
         {/* <Link value="mar">Mar</Link>
         <Link value="montaña">Montaña</Link>
         <Link value="camping">Camping</Link>
         <Link value="nieve">Nieve</Link> */}
     </div>
     </>
   );
 }

 export default Home;