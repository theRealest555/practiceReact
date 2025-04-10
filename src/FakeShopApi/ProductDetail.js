import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchProductsSuccess } from './actions';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    const fetchProduct = async () => {
      if (!product) {
        setLoading(true);
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          dispatch(fetchProductsSuccess([response.data])); 
          product = response.data;
        } catch (err) {
          setError('Failed to fetch product data');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [dispatch, id, product]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
