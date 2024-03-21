import React, { useState } from "react";

function EditBids(props) {
  const [client, setClient] = useState(props.client);
  const [task, setTask] = useState(props.task);
  const [date, setDate] = useState(props.date);
  const [price, setPrice] = useState(props.price);

  const handleClientChange = (e) => {
    setClient(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = () => {
    props.updateBid(client, task, date, price);
  };

  return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay" onClick={() => props.closeModal(true)}></div>
        <div className="content">
          <div className="container">
            <h1>Make Changes</h1>
            <div className="form-group">
              <label>Client:</label>
              <input
                type="text"
                value={client}
                onChange={handleClientChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Task:</label>
              <input
                type="text"
                value={task}
                onChange={handleTaskChange}
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
              <label>Price:</label>
              <input
                type="text"
                value={price}
                onChange={handlePriceChange}
                className="form-control"
              />
            </div>
            <br />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Update Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBids;
