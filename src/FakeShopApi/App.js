import React from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';




const App = () => {
  

  return (
    <Router>
      <div>
        <h1>FakeShop</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;