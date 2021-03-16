import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function PrivateRoute({ component: Component, exact, path, ...props }) {
  const { user } = useAuth();
  console.log("private", user);
  if (user && user.isLogged) {
    return <Redirect to={"/login"} />;// usuario que quiera entrar y no este logueado.
  }

  return (
    <Route exact path={path}>
      <Component {...props} />
    </Route>
  );
}

export default PrivateRoute;