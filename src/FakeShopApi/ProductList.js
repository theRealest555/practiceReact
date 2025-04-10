import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from './actions';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(fetchProductsPending());
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(fetchProductsSuccess(response.data));
      } catch (err) {
        dispatch(fetchProductsError(err.message));
      }};

    fetchProducts();
  }, [dispatch]);

  if (status === 'pending') {
    return <p className="status">Loading...</p>;
  }

  if (status === 'rejected') {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
