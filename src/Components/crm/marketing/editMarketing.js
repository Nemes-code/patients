import React, { useState } from "react";

function EditMark(props) {
  const [date, setDate] = useState(props.date);
  const [activity, setActivity] = useState(props.activity);
  const [target, setTarget] = useState(props.target);
  const [status, setStatus] = useState(props.status);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleActivityChange = (e) => {
    setActivity(e.target.value);
  };

  const handleTargetChange = (e) => {
    setTarget(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = () => {
    props.updateMark(date, activity, target, status);
  };

  return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay" onClick={() => props.closeModal(true)}></div>
        <div className="content">
          <div className="container">
            <h1>Edit Mark</h1>
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
              <label>Activity:</label>
              <input
                type="text"
                value={activity}
                onChange={handleActivityChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Target:</label>
              <input
                type="text"
                value={target}
                onChange={handleTargetChange}
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
              Update Mark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMark;
