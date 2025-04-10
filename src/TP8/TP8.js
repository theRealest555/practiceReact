import React from "react";
import { Routes, Route, Link, useLocation , Outlet} from "react-router-dom";
import App from "./App";
import App2 from "./APP2";

const TP8 = () => {
  const location = useLocation();

  const hideCardsPaths = ["/app", "/app2"];

  const shouldHideCards = hideCardsPaths.includes(location.pathname);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">TP8 - Explore the Components</h1>
      
      {!shouldHideCards && (
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">App Component</h5>
                <p className="card-text">Dive into the first component of this project.</p>
                <Link to="app" className="btn btn-primary btn-block">View Component</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">App2 Component</h5>
                <p className="card-text">Explore the second component of this project.</p>
                <Link to="app2" className="btn btn-primary btn-block">View Component</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Outlet/>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/app2" element={<App2 />} />        
      </Routes>
    </div>
  );
};

export default TP8;