import { createContext, useContext } from "react";

export const AuthContext = createContext({
  isLogged: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const useAuth = () => useContext(AuthContext);
