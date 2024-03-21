import React, { useState } from "react";

function EditEnq(props) {
  const [date, setDate] = useState(props.date);
  const [item, setItem] = useState(props.item);
  const [description, setDescription] = useState(props.description);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    props.updateOfe(date, item, description);
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
              <label>Item:</label>
              <input
                type="text"
                value={item}
                onChange={handleItemChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                className="form-control"
              />
            </div>
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Update Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEnq;
