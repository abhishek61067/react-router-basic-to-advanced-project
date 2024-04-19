"use client";
import React, { useState } from "react";
import { useAuth } from "./AuthContextProvider";

const Login = () => {
  // extracting useAuth
  const auth = useAuth();
  console.log("auth from login page: ", auth);

  const [user, setUser] = useState(null);
  const handleUserNameInputChange = (e) => {
    const userName = e.currentTarget.value;
    setUser({ ...user, userName });
  };
  const handleLoginFormSubmit = (e) => {
    console.log("handle login form submit");
    e.preventDefault();
    // set the user in context
    auth.handleMainLogin(user);
  };
  return (
    <div>
      <form action="" onSubmit={handleLoginFormSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          required
          onChange={handleUserNameInputChange}
        />
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
