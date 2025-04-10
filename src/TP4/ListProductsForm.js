import React, { useState } from 'react';
import ProductGrid from './productGrid';
import Form from './Form';

const App = () => {
    const [products, setProducts] = useState([
        { id: 1, title: 'PC Portable Gamer HP VICTUS', price: '7490 DH', thumbnail: '/img/2c2cb9af5b21c10e8cdfca027dc6211a.jpg' },
        { id: 2, title: 'PC Portable Gamer HP VICTUS', price: '2190 DH', thumbnail: '/img/59bf2412744704ee98a87180275c6d1b.jpg' },
    ]);

  const addProduct = (product) => {
    setProducts([...products, product]); 
  };


  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Ordinateurs portables</h1>
      <Form onAddProduct={addProduct} />
      <ProductGrid products={products} />
    </div>
  );
};

export default App;
