import React from "react";

export default function ProductCard({ product, onAdd }) {
  const handleAdd = () => {
    if (onAdd) onAdd(product);
  };

  return (
    <div className="card">
      <img className="card-img-top" src={product.image} alt={product.title} />
      <div className="card-body">
        <div className="card-title h5">{product.title}</div>
        <p className="card-text">${product.price}</p>

        {/* ✅ Test looks for this exact text */}
        <button type="button" className="btn btn-success me-2" onClick={handleAdd}>
          Add to Cart
        </button>

        <a href={`/products/${product.id}`}>
          <button className="btn btn-primary" type="button">
            View the Details
          </button>
        </a>
      </div>
    </div>
  );
}
