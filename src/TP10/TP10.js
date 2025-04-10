import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import App from "./noredux/App";
import App2 from "./redux/App";

const TP10 = () => {
  return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">TP10 - Explore the Components</h1>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">App Component</h5>
                <p className="card-text">Dive into the first component of this project.</p>
                <Link to="/app" className="btn btn-primary btn-block">View Component</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">App2 Component</h5>
                <p className="card-text">Explore the second component of this project.</p>
                <Link to="/app2" className="btn btn-primary btn-block">View Component</Link>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/app2" element={<App2 />} />
        </Routes>
      </div>
  );
};

export default TP10;
