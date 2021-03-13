import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import { signup } from "../../service/auth.service";
import {useAuth} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";

function Signup() {
const {setUser} = useAuth();
const {push} = useHistory();
  const handleSignup = async (user) => {
    
    try {
      const { data } = await signup(user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser({ user: data.user });
      // const {data}= await signup(user);
      // console.log("holaaa", user);
      // console.log("user", userCreated.data);
      // const newUser = userCreated.data;
    //   if (data){
    //   localStorage.setItem("user", "true");
    //   setUser(user);
    //   push("/home");
    // } 
    } catch (e) {
      console.error(e);
    }
  };

  return <AuthForm btnText="Registrarse" onSubmit={handleSignup} />;
}

export default Signup;