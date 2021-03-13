import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./views/Auth/Login";
import Signup from "./views/Auth/Signup";
// import Home from "./views/Home/Home";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AnonRoute from "./components/Routes/AnonRoute";
import Navbar from "./components/Common/Navbar";

function App() {
  return (
    <>
        {/* <button onClick={() => localStorage.removeItem("user")}>logout</button> */}

        
        <Switch>
        
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <PrivateRoute path="/private" component={PrivateComp} />
          <AnonRoute path="/anon" component={() => <h1>Anon Route</h1>} />
          <Route exact path="/">
            {/* <Home /> */}
            <Navbar />
          </Route>
        </Switch>
      
    </>
  );
}

function PrivateComp() {
  return <h1>This is private</h1>;
}

export default App;
