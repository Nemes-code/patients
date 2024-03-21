import React, { useState } from "react";
import "../../../../index.css";

function EditModal(props) {
  const [name, setName] = useState(props.name);
  const [address, setAddress] = useState(props.address);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay" onClick={() => props.closeModal(true)}></div>
        <div className="content">
          <div className="container">
            <h1>Make Changes</h1>
            <div className="form-group">
              <label>Staff Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Position:</label>
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
                className="form-control"
              />
            </div>
            <br />
            <button
              className="btn btn-primary"
              onClick={() => props.updateData(name, address)}
            >
              Update Field
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
