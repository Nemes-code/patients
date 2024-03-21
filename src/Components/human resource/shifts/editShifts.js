import React, { useState } from "react";
import "../../../index.css";

function EditShift(props) {
  const [name, setName] = useState(props.name);
  const [site, setSite] = useState(props.site);
  const [date, setDate] = useState(props.date);
  const [shift, setShift] = useState(props.shift);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSiteChange = (e) => {
    setSite(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleShiftChange = (e) => {
    setShift(e.target.value);
  };

  const handleSubmit = () => {
    props.updateShift(name, site, date, shift);
  };

  return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay" onClick={() => props.closeModal(true)}></div>
        <div className="content">
          <div className="container">
            <h1>Make Changes</h1>
            <div className="form-group">
              <label>Shift Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Site:</label>
              <input
                type="text"
                value={site}
                onChange={handleSiteChange}
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
              <label>Shift:</label>
              <input
                type="text"
                value={shift}
                onChange={handleShiftChange}
                className="form-control"
              />
            </div>
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Update Shift
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditShift;
