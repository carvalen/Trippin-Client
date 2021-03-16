import React from "react";
import {login,signup, logout} from "../service/auth.service"
const AuthContext = React.createContext();

const initialState = {
  user: localStorage.getItem("user"),
};

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(initialState);
  const handleLogin = React.useCallback(async (user) => {
    try {
      const { data: loggedUser } = await login(user);
      const strgyfiedUser = JSON.stringify({ ...loggedUser, isLogged: true });
  localStorage.setItem("user", strgyfiedUser);
      setUser({ user: { ...loggedUser, isLogged: true } });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSignup = React.useCallback(async (user) => {
    try {
      const { data: loggedUser } = await signup(user);
      const strgyfiedUser = JSON.stringify({ ...loggedUser, isLogged: true });
  localStorage.setItem("user", strgyfiedUser);
      setUser({ user: { ...loggedUser, isLogged: true } });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleLogout = React.useCallback(async () => {
    try {
      await logout();
      localStorage.removeItem("user");
      setUser({ user: {
        id: null,
        email: "",
        isLogged: false,
      } });
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ ...user, setUser, handleLogin,handleSignup,handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => React.useContext(AuthContext);