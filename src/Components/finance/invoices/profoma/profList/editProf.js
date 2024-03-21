import React, { useState } from "react";

function EditProf(props) {
  const [number, setNumber] = useState(props.number);
  const [date, setDate] = useState(props.date);
  const [customer, setCustomer] = useState(props.customer);
  const [status, setStatus] = useState(props.status);

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleCustomerChange = (e) => {
    setCustomer(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = () => {
    props.updateList(number, date, customer, status);
  };

  return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay" onClick={() => props.closeModal(true)}></div>
        <div className="content">
          <div className="container">
            <h1>Make Changes</h1>
            <div className="form-group">
              <label>Number:</label>
              <input
                type="text"
                value={number}
                onChange={handleNumberChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Customer:</label>
              <input
                type="text"
                value={customer}
                onChange={handleCustomerChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <input
                type="text"
                value={status}
                onChange={handleStatusChange}
                className="form-control"
              />
            </div>
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Update List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProf;
