import React from "react";
import AuthForm from "../../components/Auth/AuthForm";

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

  return <AuthForm btnText="Iniciar Sesión" onSubmit={login} />;
}

export default Login;