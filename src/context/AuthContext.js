import React from "react";
import { login, signup, logout } from "../service/auth.service";
const AuthContext = React.createContext();

const localUser =
  localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: localUser,
};

function AuthProvider({ children }) {
  const [state, setUser] = React.useState(initialState);

  const handleLogin = React.useCallback(async (user) => {
    try {
      const { data: loggedUser } = await login(user);
      const stringyfiedUser = JSON.stringify({ ...loggedUser, isLogged: true });
      localStorage.setItem("user", stringyfiedUser);
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
      setUser({
        user: {
          id: null,
          email: "",
          isLogged: false,
        },
      });
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        setUser,
        handleLogin,
        handleSignup,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => React.useContext(AuthContext);
