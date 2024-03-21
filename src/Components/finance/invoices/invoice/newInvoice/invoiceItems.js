import React, { useState } from "react";
import "./invoiceTittle.css";
import axios from "axios"; // Import Axios for HTTP requests

function InvoiceItems() {
  const [rows, setRows] = useState([
    {
      itemName: "",
      itemDescription: "",
      itemRate: "",
      itemQuantity: "",
      itemAmount: "",
    },
  ]);
  const [vatPercentage, setVatPercentage] = useState(0);
  const [discount, setDiscount] = useState(0);

  const calculateSubtotal = () => {
    return rows.reduce(
      (total, row) => total + parseFloat(row.itemAmount || 0),
      0
    );
  };

  const calculateVatAmount = () => {
    return (calculateSubtotal() * vatPercentage) / 100;
  };

  const calculateGrandTotal = () => {
    return calculateSubtotal() + calculateVatAmount() - discount;
  };

  const [subtotal, setSubtotal] = useState(calculateSubtotal());
  const [vatAmount, setVatAmount] = useState(calculateVatAmount());
  const [grandTotal, setGrandTotal] = useState(calculateGrandTotal());

  const addRow = () => {
    setRows([
      ...rows,
      {
        itemName: "",
        itemDescription: "",
        itemRate: "",
        itemQuantity: "",
        itemAmount: "",
      },
    ]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    if (name === "itemRate" || name === "itemQuantity") {
      updatedRows[index].itemAmount =
        parseFloat(updatedRows[index].itemRate) *
        parseFloat(updatedRows[index].itemQuantity);
    }
    setRows(updatedRows);
    setSubtotal(calculateSubtotal());
    setVatAmount(calculateVatAmount());
    setGrandTotal(calculateGrandTotal());
  };

  const handleVatChange = (event) => {
    const { value } = event.target;
    setVatPercentage(parseFloat(value));
    setVatAmount((calculateSubtotal() * parseFloat(value)) / 100);
    setGrandTotal(calculateGrandTotal());
  };

  const handleDiscountChange = (event) => {
    const { value } = event.target;
    setDiscount(parseFloat(value));
    setGrandTotal(calculateGrandTotal());
  };

  const saveInvoice = async () => {
    try {
      const invoiceData = {
        rows,
        vat: vatPercentage,
        discount,
        subtotal,
        total: grandTotal,
      };
      const response = await axios.post(
        "http://127.0.0.1:8000/saveinvoic",
        invoiceData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error saving invoice:", error);
    }
  };

  return (
    <div className="invoice-items">
      <h2>Invoice Items</h2>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Rate</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="itemName"
                  value={row.itemName}
                  onChange={(e) => handleChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="itemDescription"
                  value={row.itemDescription}
                  onChange={(e) => handleChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="itemRate"
                  value={row.itemRate}
                  onChange={(e) => handleChange(index, e)}
                  step="0.01"
                />
              </td>
              <td>
                <input
                  type="number"
                  name="itemQuantity"
                  value={row.itemQuantity}
                  onChange={(e) => handleChange(index, e)}
                  min="0"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="itemAmount"
                  value={row.itemAmount}
                  readOnly
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-row-btn" onClick={addRow}>
        Add Row
      </button>
      <div className="additional-inputs">
        <input
          type="text"
          value={subtotal.toFixed(2)}
          readOnly
          placeholder="Subtotal"
        />
        <input
          type="number"
          value={vatPercentage}
          onChange={handleVatChange}
          placeholder="VAT (%)"
        />
        <input
          type="text"
          value={vatAmount.toFixed(2)}
          readOnly
          placeholder="VAT Amount"
        />
        <input
          type="number"
          value={discount}
          onChange={handleDiscountChange}
          placeholder="Discount"
        />
        <input
          type="text"
          value={grandTotal.toFixed(2)}
          readOnly
          placeholder="Grand Total"
        />
        <button className="save-btn" onClick={saveInvoice}>
          Save Invoice
        </button>
      </div>
      <textarea
        className="additional-notes"
        placeholder="Additional Notes"
        rows={4}
        cols={50}
      ></textarea>
    </div>
  );
}

export default InvoiceItems;
