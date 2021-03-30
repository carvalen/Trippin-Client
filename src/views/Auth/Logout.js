 import React from 'react'
 import {Link} from "react-router-dom";
import Footer from "../../components/Common/Footer"
import "./Auth.css";


 function Logout() {
     return (
         <>
         <nav className="nav-auth">
         <Link to='/' className='navbar-logo'>
TRIPPIN
<i className="fas fa-campground"></i>
</Link>
         </nav>
         <div className= "container-main-auth">
        <div className="logout-container">
            <h2>Has cerrado sesión</h2>
            <p>¿Quieres volver a entrar?</p>
            <Link to="/login" className= "link-register"> 

              Iniciar Sesión
            </Link>
        </div>
        </div>
        <Footer />
         </>
     )
 }

 export default Logout;
