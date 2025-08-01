import React from "react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
