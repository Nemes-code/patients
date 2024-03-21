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
              <Link className="nav-link" to="/invoices">
                Invoices
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/newInvoice">
                New Invoice
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profoma">
                Profoma
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">
                New Profoma
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/payroll">
                Payroll
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/incomes">
                Incomes
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/expenses">
                Expenses
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/settings">
                Invoice Settings
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
