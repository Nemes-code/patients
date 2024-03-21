import React, { useState } from "react";

function EditAttendance(props) {
  const [date, setDate] = useState(props.date);
  const [name, setName] = useState(props.name);
  const [timeIn, setTimeIn] = useState(props.timeIn);
  const [timeOut, setTimeOut] = useState(props.timeOut);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTimeInChange = (e) => {
    setTimeIn(e.target.value);
  };

  const handleTimeOutChange = (e) => {
    setTimeOut(e.target.value);
  };

  const handleSubmit = () => {
    props.updateAttendance(date, name, timeIn, timeOut);
  };

  return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay" onClick={() => props.closeModal(true)}></div>
        <div className="content">
          <div className="container">
            <h1>Edit Attendance</h1>
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
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Time In:</label>
              <input
                type="text"
                value={timeIn}
                onChange={handleTimeInChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Time Out:</label>
              <input
                type="text"
                value={timeOut}
                onChange={handleTimeOutChange}
                className="form-control"
              />
            </div>
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Update Attendance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAttendance;
