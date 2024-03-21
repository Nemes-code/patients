import React, { useState, useEffect } from "react";
import axios from "axios";
import IctList from "./ictList";
import EditIct from "./editIct";
import Nav from "../../navigation";

function IctDeals() {
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");
  const [location, setLocation] = useState("");
  const [ictDeals, setIctDeals] = useState([]);
  const [modal, setModal] = useState(false);

  function saveIctDeal() {
    const data = {
      date: date,
      activity: activity,
      location: location,
    };
    axios
      .post("http://127.0.0.1:8000/saveictd", data)
      .then(function (response) {
        setDate("");
        setActivity("");
        setLocation("");
        // Refresh ICT deals data after saving
        fetchIctDeals();
      });
  }

  function deleteIctDeal(id) {
    axios
      .post("http://127.0.0.1:8000/deleteictd", { id: id })
      .then(function (response) {
        // Refresh ICT deals data after deletion
        fetchIctDeals();
      });
  }

  useEffect(() => {
    fetchIctDeals();
  }, []);

  function fetchIctDeals() {
    axios.get("http://127.0.0.1:8000/getictd").then(function (response) {
      setIctDeals(response.data);
    });
  }

  function showModal(id, date, activity, location) {
    setId(id);
    setDate(date);
    setActivity(activity);
    setLocation(location);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateIctDeal(newDate, newActivity, newLocation) {
    const data = {
      id: id,
      date: newDate,
      activity: newActivity,
      location: newLocation,
    };
    axios
      .post("http://127.0.0.1:8000/updateictd", data)
      .then(function (response) {
        // Refresh ICT deals data after update
        fetchIctDeals();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>ICT Deals Management</h1>
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
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Activity"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="form-control"
        />
        <br />
        <button onClick={saveIctDeal} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <IctList
          ictDeals={ictDeals}
          deleteIctDeal={deleteIctDeal}
          showModal={showModal}
        />
        {modal && (
          <EditIct
            id={id}
            date={date}
            activity={activity}
            location={location}
            updateIctDeal={updateIctDeal}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default IctDeals;
