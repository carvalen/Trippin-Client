import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
 import Home from "./views/Home/Home";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AnonRoute from "./components/Routes/AnonRoute";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import {logout} from "./service/auth.service";

function App() {
  const handleLogOut = async () => 
   {
    localStorage.removeItem("user")
    await logout();
   }
  return (
    <>
         <button onClick={handleLogOut}>Logout</button> 

        <Navbar />
        
        <Switch>
        
          <AnonRoute path="/login" component={Login}/>
         
          <AnonRoute path="/signup" component={Signup}/>
            
      
          
        <PrivateRoute exact path="/home" component={Home}/>
             
        </Switch>
        <Footer/>
    </>
  );
}


export default App;
