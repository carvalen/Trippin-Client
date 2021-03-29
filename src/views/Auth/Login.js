import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Footer from "../../components/Common/Footer";
import "./Auth.css";

function Login() {
  const { handleLogin, error } = useAuth();

  const login = async (user) => {
    try {
      await handleLogin(user);
    } catch (e) {
      console.error(e);
      console.log("error", e);
    }
  };
  console.log("error", error);

  return (
   
    <div>
      <AuthForm btnText="Iniciar Sesión" onSubmit={login} />
      <div className="container-main-auth">

        <p>{error}</p>
        <div className="auth-container">
          ¿No tienes aún una cuenta?<br />
          <Link to="/signup" className="link-register">
            {" "}
            Regístrate
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
