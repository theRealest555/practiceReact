import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetail() {
  const { id } = useParams();
  const product = useSelector((state) => state.products.products.find((p) => p.id === parseInt(id)));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;