import React from "react";
import "./invoiceTittle.css";
import Nav from "../../../navigation";
import InvoiceItems from "./invoiceItems";

function InvoiceTitle() {
  return (
    <div className="d-flex">
      <Nav />
      <div className="invoice-container">
        <h1 className="invoice-title">Invoice</h1>
        <img src="/logo.png" alt="Company Logo" className="logo" />
        <div className="invoice-info">
          <div className="bill-from">
            <h2>Bill From</h2>
            <div className="input-group">
              <input
                type="text"
                id="companyName"
                placeholder="name"
                name="companyName"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="address"
                placeholder="address"
                name="address"
              />
            </div>
            <div className="input-group">
              <input type="text" id="phone" placeholder="phone" name="phone" />
            </div>
            <div className="input-group">
              <input type="email" id="email" placeholder="email" name="email" />
            </div>
          </div>
          <div className="bill-to">
            <h2>Bill To</h2>
            <div className="input-group">
              <input
                type="text"
                id="customerName"
                placeholder="name"
                name="customerName"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="customerAddress"
                placeholder="address"
                name="customerAddress"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="customerPhone"
                placeholder="phone"
                name="customerPhone"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                id="customerEmail"
                placeholder="email"
                name="customerEmail"
              />
            </div>
          </div>
          <div className="invoice-number">
            <h2>Invoice Details</h2>
            <div className="input-group">
              <input
                type="text"
                id="invoiceNumber"
                placeholder="invoice No."
                name="invoiceNumber"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="invoiceDate"
                placeholder="date"
                name="invoiceDate"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="invoiceDDate"
                placeholder="due date"
                name="invoiceDDate"
              />
            </div>
          </div>
        </div>

        <InvoiceItems />
      </div>
    </div>
  );
}

export default InvoiceTitle;
