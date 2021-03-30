import React from "react";
import { Switch, useHistory, Route} from "react-router-dom";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
import Logout from "./views/Auth/Logout";
import Welcome from "./views/Home/Welcome";
import Home from "./views/Home/Home";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AnonRoute from "./components/Routes/AnonRoute";

import { useAuth } from "./context/AuthContext";
import Days from "./components/Trips/Days";
import Profile from "./components/Profile/Profile";
import TemplateResult from "./components/Trips/TemplateResult";


function App() {
  const { user, handleLogout } = useAuth();
  const history = useHistory();
  const logout = async () => {
    await handleLogout();
    history.push("/logout");
  };

  return (
    <>
      
      <div className="logout">  {user?.isLogged && <div className="logout-logo"><i className="fas fa-sign-out-alt" onClick={logout}>Salir</i></div>}</div>
      <Switch>
      
        <AnonRoute exact path="/" component={Welcome} />
        <AnonRoute exact path="/login" component={Login} />
        <AnonRoute exact path="/signup" component={Signup} />
        <AnonRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/:type/days" component={Days} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/template" component={TemplateResult} />
        <Route path="*"><h1>Not Found</h1></Route>
 
      </Switch>
   
    </>
  );
}

export default App;
