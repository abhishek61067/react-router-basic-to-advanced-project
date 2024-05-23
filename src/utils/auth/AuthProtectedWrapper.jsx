import React from "react";
import { useAuth } from "./AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const AuthProtectedWrapper = ({ children }) => {
  const { pathname } = useLocation();

  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return <div>{children}</div>;
};

export default AuthProtectedWrapper;
