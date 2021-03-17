import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import {Link} from "react-router-dom"
import { useAuth } from "../../context/AuthContext";

function Login() {
  const { handleLogin } = useAuth();
  const login = async (user) => {
    try {
       await handleLogin(user);
    } catch (e) {
      console.error(e);
    }
  };

  return <div><AuthForm btnText="Iniciar Sesión" onSubmit={login} />¿No tienes aún una cuenta?<Link to="/signup">Regístrate</Link></div>;
}

export default Login;