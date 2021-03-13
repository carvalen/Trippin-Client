import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import { login } from "../../service/auth.service";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const { setUser } = useAuth();
  const handleLogin = async (user) => {
    try {
      const { data } = await login(user);
      localStorage.setItem("user", JSON.stringify(data.user));
      const newUser = data.user;
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return <AuthForm btnText="Iniciar Sesión" onSubmit={handleLogin} />;
}

export default Login;