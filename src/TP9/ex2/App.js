import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListProducts from './ListProducts';
import ProductDetail from './productDetail';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
