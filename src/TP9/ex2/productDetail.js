import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  const products = [
    { id: 1, title: 'PC Portable Gamer HP VICTUS', price: '7490 DH', description: 'High-performance gaming laptop.', thumbnail: '/img/2c2cb9af5b21c10e8cdfca027dc6211a.jpg' },
    { id: 2, title: 'PC Portable Gamer HP VICTUS', price: '2190 DH', description: 'Budget gaming laptop.', thumbnail: '/img/59bf2412744704ee98a87180275c6d1b.jpg' },
    { id: 3, title: 'Pc Portable Chromebook Acer', price: '3640 DH', description: 'Lightweight Chromebook for daily tasks.', thumbnail: '/img/873c39a7d907e12b2702bd88593eac48.jpg' },
    { id: 4, title: 'PC Portable - HUAWEI', price: '1270 DH', description: 'Affordable laptop for general use.', thumbnail: '/img/c912a5d57ae850f009db600febb1a768.jpg' },
  ];

  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-5 product-detail">
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
    </div>
  );
}

export default ProductDetail;
