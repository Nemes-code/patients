import React, { useState, useEffect } from "react";
import axios from "axios";
import IctList from "./listIct";
import EditIct from "./editIct";
import Nav from "../../navigation";

function IctActivities() {
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");
  const [location, setLocation] = useState("");
  const [ictActivities, setIctActivities] = useState([]);
  const [modal, setModal] = useState(false);

  function saveIctActivity() {
    const data = {
      date: date,
      activity: activity,
      location: location,
    };
    axios.post("http://127.0.0.1:8000/saveict", data).then(function (response) {
      setDate("");
      setActivity("");
      setLocation("");
      // Refresh ICT activities data after saving
      fetchIctActivities();
    });
  }

  function deleteIctActivity(id) {
    axios
      .post("http://127.0.0.1:8000/deleteict", { id: id })
      .then(function (response) {
        // Refresh ICT activities data after deletion
        fetchIctActivities();
      });
  }

  useEffect(() => {
    fetchIctActivities();
  }, []);

  function fetchIctActivities() {
    axios.get("http://127.0.0.1:8000/getict").then(function (response) {
      setIctActivities(response.data);
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

  function updateIctActivity(newDate, newActivity, newLocation) {
    const data = {
      id: id,
      date: newDate,
      activity: newActivity,
      location: newLocation,
    };
    axios
      .post("http://127.0.0.1:8000/updateict", data)
      .then(function (response) {
        // Refresh ICT activities data after update
        fetchIctActivities();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>ICT Activities Management</h1>
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
        <button
          onClick={saveIctActivity}
          type="button"
          className="btn btn-primary"
        >
          Save
        </button>
        <br />
        <br />

        <IctList
          ictActivities={ictActivities}
          deleteIctActivity={deleteIctActivity}
          showModal={showModal}
        />
        {modal && (
          <EditIct
            id={id}
            date={date}
            activity={activity}
            location={location}
            updateIctActivity={updateIctActivity}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default IctActivities;
