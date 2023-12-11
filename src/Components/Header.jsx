import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header({ children }) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand">
              NEXCI
            </Link>{" "}
            <Link to="/pos" className="btn btn-primary">
              Point Of Sale
            </Link>
            <Link to="/acct" className="btn btn-primary">
              Accounts
            </Link>
            <Link to="/cst" className="btn btn-primary">
              Customers
            </Link>
            <Link to="/stf" className="btn btn-primary">
              Staff
            </Link>
            <Link to="/stk" className="btn btn-primary">
              Stock
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="container mt-3">{children}</div>
        <ToastContainer />
      </main>
    </div>
  );
}

export default Header;
