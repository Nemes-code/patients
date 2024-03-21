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
              <Link className="nav-link" to="/attendance">
                Aattendance
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/operations">
                Operations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ictactivities">
                ICT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ictdeals">
                ICT Deals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/officeactivities">
                Office
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/enquiries">
                Office Enquiries
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/staff">
                Staffs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shifts">
                Shifts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hrreport">
                HR Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ictreport">
                ICT Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/operationsrep">
                Operations Report
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
