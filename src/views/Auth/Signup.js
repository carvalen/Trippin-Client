import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import {Link} from "react-router-dom"
import {useAuth} from "../../context/AuthContext";
import Footer from "../../components/Common/Footer";
import "./Auth.css";

function Signup() {
  const {handleSignup} = useAuth();
  const signup = async (user) => {
    try {
      await handleSignup(user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    
  <div className="auth-container">
  <AuthForm btnText="Registrarse" onSubmit={signup} />
  <div className= "container-main-auth">
  ¿Ya tienes una cuenta?
  <Link to="/login" className= "link-register"> 
   
  Iniciar sesión
  </Link>
  </div>
  <Footer />
  </div>
  )}

export default Signup;