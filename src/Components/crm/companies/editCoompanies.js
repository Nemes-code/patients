import React, { useState } from "react";

function EditComp(props) {
  const [name, setName] = useState(props.name);
  const [phone, setPhone] = useState(props.phone);
  const [email, setEmail] = useState(props.email);
  const [location, setLocation] = useState(props.location);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = () => {
    props.updateComp(name, phone, email, location);
  };

  return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay" onClick={() => props.closeModal(true)}></div>
        <div className="content">
          <div className="container">
            <h1>Make Changes</h1>
            <div className="form-group">
              <label>Company Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
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
              Update Company
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditComp;
