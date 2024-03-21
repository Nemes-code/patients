import React, { useState } from "react";

function EditSetting(props) {
  const [name, setName] = useState(props.name);
  const [address, setAddress] = useState(props.address);
  const [phone, setPhone] = useState(props.phone);
  const [email, setEmail] = useState(props.email);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay" onClick={() => props.closeModal(true)}></div>
        <div className="content">
          <div className="container">
            <h1>Make Changes</h1>
            <div className="form-group">
              <label>Setting Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Setting Address:</label>
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Setting Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Setting Email:</label>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                className="form-control"
              />
            </div>
            <br />
            <button
              className="btn btn-primary"
              onClick={() => props.updateSetting(name, address, phone, email)}
            >
              Update Setting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditSetting;
