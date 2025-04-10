import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";
import "./App.css";
import ProductDetail from "./ProductDetail";

function App() {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="app">
      <h1>FakeShop</h1>
      {status === "pending" && <p>Loading...</p>}
      {status === "rejected" && <p>Failed to load products. Please try again.</p>}
      {status === "resolved" && (
        <div className="product-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleCardClick(product.id)}
            >
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <p>{product.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
