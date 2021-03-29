import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../Common/Navbar.css"

function Navbar() {
  const { user } = useAuth();
  
 
  return (
    <>
      <nav className="navbar">
      <div className="navbar-container">
        <Link to='/' className='navbar-logo'>
            TRIPPIN 
           <i className="fas fa-campground"></i>
        </Link>
      </div>
      
        
        <ul>
          {user?.isLogged ? (
            <>
            
              <li className="nav-item">
                <Link to="/home" className="nav-links" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-links" >Perfil</Link>
              </li>{" "}
              
            </>
          ) : (
            <>
              
            </>
          )}
        </ul>
        
      </nav>
    </>
  );
}

export default Navbar;
