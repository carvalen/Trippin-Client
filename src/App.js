import React from "react";
import { Switch, useHistory, Link } from "react-router-dom";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
import Home from "./views/Home/Home";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AnonRoute from "./components/Routes/AnonRoute";
import Navbar from "./components/Common/Navbar";
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
    history.push("/login");
  };

  return (
    <>
      {user?.isLogged && <button onClick={logout}>Logout</button>}

      <Navbar />

      <Switch>
        <AnonRoute exact path="/" component={() => <div><Link to="/Signup">Registrate</Link><Link to="/login">Iniciar Sesión</Link></div> } />
        <AnonRoute exact path="/login" component={Login} />
        <AnonRoute exact path="/signup" component={Signup} />
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
