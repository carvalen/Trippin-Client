import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import {Link} from "react-router-dom"
import { useAuth } from "../../context/AuthContext";
import Footer from "../../components/Common/Footer"
import "./Auth.css";

function Login() {
  const { handleLogin } = useAuth();
  const login = async (user) => {
    try {
       await handleLogin(user);
    } catch (e) {
      console.error(e);
    }
  };

  return <div><AuthForm btnText="Iniciar Sesión" onSubmit={login} />
  <div className="auth-container">¿No tienes aún una cuenta? 
  <Link to="/signup" className= "link-register"> <i className="fas fa-arrow-right"></i> Regístrate</Link>
  </div><Footer /></div>;
  
}

export default Login;