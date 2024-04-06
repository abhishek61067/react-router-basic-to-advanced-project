import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  // handle back
  const handleBack = (e) => {
    navigate("/", {
      replace: true,
    });
  };
  return (
    <div>
      <h1>Order Summary page</h1>

      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default OrderSummary;
