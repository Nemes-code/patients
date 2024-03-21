import React, { useState, useEffect } from "react";
import axios from "axios";
import OfaList from "./ofaList";
import EditOfa from "./editOfa";
import Nav from "../../navigation";

function OfficeActivities() {
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [officeActivities, setOfficeActivities] = useState([]);
  const [modal, setModal] = useState(false);

  function saveOfa() {
    const data = {
      date: date,
      description: description,
      amount: amount,
    };
    axios.post("http://127.0.0.1:8000/saveOfa", data).then(function (response) {
      setDate("");
      setDescription("");
      setAmount("");
      // Refresh office activities data after saving
      fetchOfficeActivities();
    });
  }

  function deleteOfa(id) {
    axios
      .post("http://127.0.0.1:8000/deleteOfa", { id: id })
      .then(function (response) {
        // Refresh office activities data after deletion
        fetchOfficeActivities();
      });
  }

  useEffect(() => {
    fetchOfficeActivities();
  }, []);

  function fetchOfficeActivities() {
    axios.get("http://127.0.0.1:8000/getOfa").then(function (response) {
      setOfficeActivities(response.data);
    });
  }

  function showModal(id, date, description, amount) {
    setId(id);
    setDate(date);
    setDescription(description);
    setAmount(amount);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateOfa(newDate, newDescription, newAmount) {
    const data = {
      id: id,
      date: newDate,
      description: newDescription,
      amount: newAmount,
    };
    axios
      .post("http://127.0.0.1:8000/updateOfa", data)
      .then(function (response) {
        // Refresh office activities data after update
        fetchOfficeActivities();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Office Activities Management</h1>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="form-control"
        />
        <br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="form-control"
        />
        <br />
        <button onClick={saveOfa} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <OfaList
          officeActivities={officeActivities}
          deleteOfa={deleteOfa}
          showModal={showModal}
        />
        {modal && (
          <EditOfa
            id={id}
            date={date}
            description={description}
            amount={amount}
            updateOfa={updateOfa}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default OfficeActivities;
