import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <div>
        <Link to="">Featured</Link>
        <Link to="brand">Brand</Link>
        <Link to="2">Product detail 2</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
