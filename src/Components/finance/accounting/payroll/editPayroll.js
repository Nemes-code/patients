import React, { useState } from "react";
import "../../../../index.css";

function EditPayroll(props) {
  const [name, setName] = useState(props.name);
  const [department, setDepartment] = useState(props.department);
  const [health, setHealth] = useState(props.health);
  const [advance, setAdvance] = useState(props.advance);
  const [loan, setLoan] = useState(props.loan);
  const [gross, setGross] = useState(props.gross);
  const [net, setNet] = useState(
    parseFloat(gross) -
      (parseFloat(health) + parseFloat(advance) + parseFloat(loan))
  ); // Calculating net based on the provided formula

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleHealthChange = (e) => {
    setHealth(e.target.value);
    setNet(
      parseFloat(gross) -
        (parseFloat(e.target.value) + parseFloat(advance) + parseFloat(loan))
    ); // Update net when health changes
  };

  const handleAdvanceChange = (e) => {
    setAdvance(e.target.value);
    setNet(
      parseFloat(gross) -
        (parseFloat(health) + parseFloat(e.target.value) + parseFloat(loan))
    ); // Update net when advance changes
  };

  const handleLoanChange = (e) => {
    setLoan(e.target.value);
    setNet(
      parseFloat(gross) -
        (parseFloat(health) + parseFloat(advance) + parseFloat(e.target.value))
    ); // Update net when loan changes
  };

  const handleGrossChange = (e) => {
    setGross(e.target.value);
    setNet(
      parseFloat(e.target.value) -
        (parseFloat(health) + parseFloat(advance) + parseFloat(loan))
    ); // Update net when gross changes
  };

  const handleSubmit = () => {
    props.updatePayroll(name, department, health, advance, loan, net, gross); // Pass net and gross to updatePayroll function
  };

  return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay" onClick={() => props.closeModal(true)}></div>
        <div className="content">
          <div className="container">
            <h1>Make Changes</h1>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Department:</label>
              <input
                type="text"
                value={department}
                onChange={handleDepartmentChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Health:</label>
              <input
                type="text"
                value={health}
                onChange={handleHealthChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Advance:</label>
              <input
                type="text"
                value={advance}
                onChange={handleAdvanceChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Loan:</label>
              <input
                type="text"
                value={loan}
                onChange={handleLoanChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Gross:</label>
              <input
                type="text"
                value={gross}
                onChange={handleGrossChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Net:</label>
              <input
                type="text"
                value={net}
                readOnly // Make net field read-only
                className="form-control"
              />
            </div>
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPayroll;
