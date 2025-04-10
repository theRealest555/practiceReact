import React, { useState } from 'react';
import Product from './Product2';
//this a variant that export the image from a link instead of a path


function ListProducts() {
  const [products, setProducts] = useState([
    { id: 1, title: 'PC Portable Gamer HP VICTUS', price: '7490 DH', thumbnail: '/img/2c2cb9af5b21c10e8cdfca027dc6211a.jpg' },
    { id: 2, title: 'PC Portable Gamer HP VICTUS', price: '2190 DH', thumbnail: '/img/59bf2412744704ee98a87180275c6d1b.jpg' },
  ]);

  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    thumbnail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setProducts([
      ...products,
      { id: Date.now(), ...newProduct },
    ]);

    setNewProduct({ title: '', price: '', thumbnail: '' });
  };


  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Ordinateurs portables</h1>

      <form className="mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Titre du Produit"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Prix"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="URL de l'Image"
          name="thumbnail"
          value={newProduct.thumbnail}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary w-100">Ajouter le Produit</button>
      </form>

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
    </div>
  );
}

export default ListProducts;
