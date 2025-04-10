import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/html" className="nav-link">HTML</Link>
      <Link to="/css" className="nav-link">CSS</Link>
      <Link to="/js" className="nav-link">JavaScript</Link>
    </nav>
  );
};

export default Navbar;
