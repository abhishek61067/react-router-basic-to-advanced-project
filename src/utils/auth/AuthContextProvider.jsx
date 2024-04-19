import React, { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const location = useLocation();
  const rediretPath = location.state?.path || "/";
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const handleMainLogin = (user) => {
    setUser(user);
    // navigating to home
    navigate(rediretPath, {
      replace: true,
    });
  };
  const handleMainLogout = () => {
    setUser(null);
    // navigating to login page
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, handleMainLogin, handleMainLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
