import React, { useState } from "react";

function EditHr(props) {
  const [date, setDate] = useState(props.date);
  const [report, setReport] = useState(props.report);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleReportChange = (e) => {
    setReport(e.target.value);
  };

  const handleSubmit = () => {
    props.updateHrr(date, report);
  };

  return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay" onClick={() => props.closeModal(true)}></div>
        <div className="content">
          <div className="container">
            <h1>Make Changes</h1>
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
              <label>Report:</label>
              <textarea
                value={report}
                onChange={handleReportChange}
                className="form-control"
              />
            </div>
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Update Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditHr;
