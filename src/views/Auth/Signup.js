import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import { signup } from "../../service/auth.service";

function Signup() {
  const handleSignup = async (user) => {
    try {
      const {data: userCreated} = await signup(user);
      console.log(userCreated);
    } catch (e) {
      console.error(e);
    }
  };

  return <AuthForm btnText="Registrarse" onSubmit={handleSignup} />;
}

export default Signup;