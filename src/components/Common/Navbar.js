import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = useAuth();
  const [click, setClick] = useState(false);
  const handleClick =()=> setClick(!click);
  const closeMobileMenu =()=> setClick(false);
  return (
    <>
      <nav className="navbar">
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        <ul>
          {user?.isLogged ? (
            <>
              <li className="nav-item">
                <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>Perfil</Link>
              </li>{" "}
            </>
          ) : (
            <>
              
            </>
          )}
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
