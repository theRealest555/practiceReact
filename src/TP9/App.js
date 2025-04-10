import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HtmlMain from './HTMLMain';
import CssMain from './CSSMain';
import JsMain from './JSMain';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HtmlMain />} />
        <Route path="/html" element={<HtmlMain />} />
        <Route path="/css" element={<CssMain />} />
        <Route path="/js" element={<JsMain />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
