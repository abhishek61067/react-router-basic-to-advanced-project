import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth/AuthContextProvider";

const Navbar = () => {
  const auth = useAuth();
  console.log("auth from navbar: ", auth);
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/profile"
      >
        Profile
      </NavLink>
      {auth.user ? (
        ""
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/login"
        >
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
