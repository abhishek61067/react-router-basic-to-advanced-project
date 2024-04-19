import React from "react";
import { useAuth } from "../utils/auth/AuthContextProvider";

const Profile = () => {
  const auth = useAuth();

  //handle logout
  const handleLogout = () => {
    auth.handleMainLogout();
  };
  return (
    <div>
      <h2>Hi {auth.user.userName}</h2>
      <form action="">
        <button onClick={handleLogout} type="submit">
          Logout
        </button>
      </form>
    </div>
  );
};

export default Profile;
