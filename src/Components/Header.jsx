import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-primary">
      <div id="header">
        <Link to="/">Customers</Link>
        <Link to="/stock">Stock</Link>
      </div>
    </nav>
  );
};

export default Header;
