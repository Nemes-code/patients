import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/customer">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/potential">
                Potential Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/marketing">
                Marketing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/companies">
                Companies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bid">
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contracts">
                Contracts
              </Link>
            </li>
            <li className="nav-item dropdown"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
