import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return <div>ProductDetail of product {id}</div>;
};

export default ProductDetail;
