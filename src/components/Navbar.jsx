import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
