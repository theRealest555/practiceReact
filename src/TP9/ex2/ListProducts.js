import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

function ListProducts() {
  const products = [
    { id: 1, title: 'PC Portable Gamer HP VICTUS', price: '7490 DH', thumbnail: '/img/2c2cb9af5b21c10e8cdfca027dc6211a.jpg' },
    { id: 2, title: 'PC Portable Gamer HP VICTUS', price: '2190 DH', thumbnail: '/img/59bf2412744704ee98a87180275c6d1b.jpg' },
    { id: 3, title: 'Pc Portable Chromebook Acer', price: '3640 DH', thumbnail: '/img/873c39a7d907e12b2702bd88593eac48.jpg' },
    { id: 4, title: 'PC Portable - HUAWEI', price: '1270 DH', thumbnail: '/img/c912a5d57ae850f009db600febb1a768.jpg' },
  ];

  return (
    <main className="container mt-5">
      <h1 className="text-center mb-4">Ordinateurs portables</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="col">
            <Product
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default ListProducts;
