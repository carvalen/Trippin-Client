import React, {useState} from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>

        <nav className="navbar">
        <div className="navbar-container">
<Link to="/" className="navbar-logo">
Trippin Navbar
</Link>
        </div>
        <ul>
        <li className='nav-item'>
              <Link to='/' className="nav-links">
                Home
              </Link>

            </li>
            <li>
            <Link to="/signup">Registrarse</Link>
            </li><li>
      <Link to="/login">Iniciar Sesión</Link>
      </li>
      <li>
      <Link to="/login">Profile</Link>
      </li>
      </ul>
        </nav>
        </>
    )
}

export default Navbar
