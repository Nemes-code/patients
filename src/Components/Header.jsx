import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navigation() {
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const [managementDropdownOpen, setManagementDropdownOpen] = useState(false);

  const toggleAdminDropdown = () => {
    setAdminDropdownOpen(!adminDropdownOpen);
    setManagementDropdownOpen(false);
  };

  const toggleManagementDropdown = () => {
    setManagementDropdownOpen(!managementDropdownOpen);
    setAdminDropdownOpen(false);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <div className="btn btn-primary">
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </div>
        <div className="dropdown">
          <button className="btn btn-primary bt" onClick={toggleAdminDropdown}>
            FINANCE
          </button>
          {adminDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/invoices">Invoices</Link>
              <Link to="/profoma">Profoma</Link>
              <Link to="/expenses">Expenses</Link>
              <Link to="/incomes">Incomes</Link>
              <Link to="/payroll">Payroll</Link>
              <Link to="/product">Store</Link>
              <Link to="/pos">POS</Link>
              <Link to="/settings">invoice Setting</Link>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button className="btn btn-primary bt" onClick={toggleAdminDropdown}>
            HR
          </button>
          {adminDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/staff">Staff</Link>
              <Link to="/shifts">On Duty</Link>
              <Link to="/attendance">Attendance</Link>
              <Link to="/operations">Operations</Link>
              <Link to="/ictactivities">ICT</Link>
              <Link to="/officeactivities">Office</Link>
              <Link to="/hrreport">HR Report</Link>
              <Link to="/ictreport">ICT Report</Link>
              <Link to="/operationsrep">Operations Report</Link>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary bt"
            onClick={toggleManagementDropdown}
          >
            CRM
          </button>
          {managementDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/customer">Customers</Link>
              <Link to="/companies">Companies</Link>
              <Link to="/potential">Potential Clients</Link>
              <Link to="/contracts">Contracts</Link>
              <Link to="/bid">Offers</Link>
              <Link to="/marketing">Marketing</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
