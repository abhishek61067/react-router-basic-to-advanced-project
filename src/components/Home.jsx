import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  // handle place order
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    navigate("/order-summary");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <form>
        <button onClick={handlePlaceOrder}>Place order</button>
      </form>
    </div>
  );
};

export default Home;
