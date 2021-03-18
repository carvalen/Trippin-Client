import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = useAuth();
  return (
    <>
      <nav className="navbar">
        <ul>
          {user?.isLogged ? (
            <>
              <li className="nav-item">
                <Link to="/home" className="nav-links">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>{" "}
            </>
          ) : (
            <>
              <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                  Trippin Navbar
                </Link>
              </div>
              {/* <li>
                <Link to="/signup">Registrarse</Link>
              </li>
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li> */}
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
