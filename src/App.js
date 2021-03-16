import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
 import Home from "./views/Home/Home";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AnonRoute from "./components/Routes/AnonRoute";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import {useAuth} from "./context/AuthContext";
import Days from "./components/Trips/Days";
import Profile from "./components/Profile/Profile";

function App() {
  const { user, handleLogout } = useAuth();
  const history = useHistory();
  const logout = async () => 
   {
     
    await handleLogout();
    history.push("/login")
   }

  return (
    <>
    {user && <button onClick={logout}>Logout</button>}
         

        <Navbar />
        
        <Switch>
        <AnonRoute exact path="/" component ={()=> <h1>Hola</h1>}/>
          <AnonRoute exact path="/login" component={Login}/>
          
          <AnonRoute exact path="/signup" component={Signup}/>
            
      
          
        <PrivateRoute exact path="/home" component={Home}/>
        <PrivateRoute exact path="/Days" component={Days}/>
        <PrivateRoute exact path="/Profile" component={Profile}/>  
        </Switch>
        <Footer/>
    </>
  );
}


export default App;
