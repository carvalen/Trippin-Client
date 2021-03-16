import React from "react";
import AuthForm from "../../components/Auth/AuthForm";

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

  return <AuthForm btnText="Registrarse" onSubmit={signup} />;
}

export default Signup;