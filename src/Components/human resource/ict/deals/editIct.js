import React, { useState } from "react";

function EditIct(props) {
  const [date, setDate] = useState(props.date);
  const [activity, setActivity] = useState(props.activity);
  const [location, setLocation] = useState(props.location);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleActivityChange = (e) => {
    setActivity(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = () => {
    props.updateIctDeal(date, activity, location);
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
              <label>Activity:</label>
              <input
                type="text"
                value={activity}
                onChange={handleActivityChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Location:</label>
              <input
                type="text"
                value={location}
                onChange={handleLocationChange}
                className="form-control"
              />
            </div>
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Update ICT Deal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditIct;
