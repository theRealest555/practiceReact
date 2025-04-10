import React from 'react';
import Product from './Product2';

const ProductGrid = ({ products }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          thumbnail={product.thumbnail}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
