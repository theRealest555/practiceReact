import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import './App.css';

import TP2EX1 from "./components/TP2EX1";
import TP2EX2 from "./classcomponents/TP2EX2";
import TP2EX3 from "./voiture/TP2EX3";
import TP3 from "./count/TP3";
import TP4 from "./TP4/TP4";
import TP5 from "./TP5/TP5";
import TP6 from "./TP6/TP6";
import TP8 from "./TP8/TP8";
import TP9 from "./TP9/TP9";
import TP10 from "./TP10/TP10";
import FS from "./fakestore/FS";
import PP from "./person/practiceperson";

const MainApp = () => {
  const location = useLocation();

  const hideCardsPaths = [
    "/tp2ex1", "/tp2ex2", "/tp2ex3", "/tp3", "/tp4", 
    "/tp5", "/tp6", "/tp8", "/tp9", "/tp10", "/fs", "/pp"
  ];

  const shouldHideCards = hideCardsPaths.includes(location.pathname);

  return (
    <div className="hub-container">
      {!shouldHideCards && (
        <>
          <h1 className="hub-title">Welcome to the Main Application Hub</h1>
          
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TP2EX1</h5>
                <p className="card-text">Explore the TP2EX1 component.</p>
                <Link to="/tp2ex1" className="card-btn">Go to TP2EX1</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TP2EX2</h5>
                <p className="card-text">Explore the TP2EX2 component.</p>
                <Link to="/tp2ex2" className="card-btn">Go to TP2EX2</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TP2EX3</h5>
                <p className="card-text">Explore the TP2EX3 component.</p>
                <Link to="/tp2ex3" className="card-btn">Go to TP2EX3</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TP3</h5>
                <p className="card-text">Explore Project 3's component.</p>
                <Link to="/tp3" className="card-btn">Go to TP3</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TP4</h5>
                <p className="card-text">Explore the TP4 component.</p>
                <Link to="/tp4" className="card-btn">Go to TP4</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TP5</h5>
                <p className="card-text">Explore the TP5 component.</p>
                <Link to="/tp5" className="card-btn">Go to TP5</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TP6</h5>
                <p className="card-text">Explore the TP6 component.</p>
                <Link to="/tp6" className="card-btn">Go to TP6</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TP8</h5>
                <p className="card-text">Explore the TP8 component.</p>
                <Link to="/tp8" className="card-btn">Go to TP8</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TP9</h5>
                <p className="card-text">Explore the TP9 component.</p>
                <Link to="/tp9" className="card-btn">Go to TP9</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">TP10</h5>
                <p className="card-text">Explore the TP10 component.</p>
                <Link to="/tp10" className="card-btn">Go to TP10</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Fake Store</h5>
                <p className="card-text">Explore the Fake Store component.</p>
                <Link to="/fs" className="card-btn">Go to Fake Store</Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Practice Person</h5>
                <p className="card-text">Explore the Practice Person component.</p>
                <Link to="/pp" className="card-btn">Go to Practice Person</Link>
              </div>
            </div>
          </div>
        </>
      )}

      <Routes>
        <Route path="/tp2ex1" element={<TP2EX1 />} />
        <Route path="/tp2ex2" element={<TP2EX2 />} />
        <Route path="/tp2ex3" element={<TP2EX3 />} />
        <Route path="/tp3" element={<TP3 />} />
        <Route path="/tp4/*" element={<TP4 />} />  
        <Route path="/tp5" element={<TP5 />} />
        <Route path="/tp6" element={<TP6 />} />
        <Route path="/tp8/*" element={<TP8 />} />
        <Route path="/tp9" element={<TP9 />} />
        <Route path="/tp10" element={<TP10 />} />
        <Route path="/fs" element={<FS />} />
        <Route path="/pp" element={<PP />} />
      </Routes>
    </div>
  );
};

export default MainApp;
