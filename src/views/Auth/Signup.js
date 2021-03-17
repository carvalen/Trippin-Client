import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import {Link} from "react-router-dom"
import {useAuth} from "../../context/AuthContext";

function Signup() {
  const {handleSignup} = useAuth();
  const signup = async (user) => {
    try {
      await handleSignup(user);
    } catch (e) {
      console.error(e);
    }
  };

  return <div><AuthForm btnText="Registrarse" onSubmit={signup} />¿Ya tienes una cuenta?<Link to="/login">Iniciar sesión</Link></div>;
}

export default Signup;