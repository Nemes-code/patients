import React, { useState } from "react";

function EditCustomer(props) {
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
              <label>Customer Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Customer Address:</label>
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Customer Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={handlePhoneChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Customer Email:</label>
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
              onClick={() => props.updateCustomer(name, address, phone, email)}
            >
              Update Field
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCustomer;
