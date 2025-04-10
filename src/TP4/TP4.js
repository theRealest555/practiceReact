import React from "react";
import {Routes, Route, Link,Outlet  } from "react-router-dom";
import ListProducts from './ListProducts';
import ListProducts2 from './ListProducts2';
import ListProducts3 from './ListProducts3';
import ListProductsForm from './ListProductsForm';

const TP4 = () => {
  return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">TP4 - Explore the Components</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">List Products</h5>
                <p className="card-text">View the list of products in this component.</p>
                <Link to="list-products" className="btn btn-primary btn-block">View Component</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">List Products 2</h5>
                <p className="card-text">Explore the second product list component.</p>
                <Link to="list-products2" className="btn btn-primary btn-block">View Component</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">List Products 3</h5>
                <p className="card-text">Discover the third product list component.</p>
                <Link to="list-products3" className="btn btn-primary btn-block">View Component</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Product Form</h5>
                <p className="card-text">Access the product form component.</p>
                <Link to="list-products-form" className="btn btn-primary btn-block">View Component</Link>
              </div>
            </div>
          </div>
        </div>
        
        <Outlet /> 

        <Routes>
          <Route path="/TP4/list-products" element={<ListProducts />} />
          <Route path="/TP4/list-products2" element={<ListProducts2 />} />
          <Route path="/TP4/list-products3" element={<ListProducts3 />} />
          <Route path="/TP4/list-products-form" element={<ListProductsForm />} />
        </Routes>
      </div>
  );
};

export default TP4;
