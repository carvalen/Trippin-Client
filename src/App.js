import React from "react";
import { Switch, useHistory} from "react-router-dom";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
import Logout from "./views/Auth/Logout";
import Welcome from "./views/Home/Welcome";
import Home from "./views/Home/Home";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AnonRoute from "./components/Routes/AnonRoute";
import Footer from "./components/Common/Footer";
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
      {user?.isLogged && <i class="fas fa-sign-out-alt" onClick={logout}></i>}

      <Switch>
        <AnonRoute exact path="/" component={Welcome} />
        <AnonRoute exact path="/login" component={Login} />
        <AnonRoute exact path="/signup" component={Signup} />
        <AnonRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/:type/days" component={Days} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/template" component={TemplateResult} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
