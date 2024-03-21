import React, { useState, useEffect } from "react";
import axios from "axios";
import MarkList from "./listMarketing";
import EditMark from "./editMarketing";
import Nav from "../navigation";

function Mark() {
  const [id, setId] = useState(""); // Added state for id
  const [date, setDate] = useState("");
  const [activity, setActivity] = useState("");
  const [target, setTarget] = useState("");
  const [status, setStatus] = useState("");
  const [marks, setMarks] = useState([]);
  const [modal, setModal] = useState(false);

  function saveMark() {
    const data = {
      date: date,
      activity: activity,
      target: target,
      status: status,
    };
    axios
      .post("http://127.0.0.1:8000/saveMark", data)
      .then(function (response) {
        setDate("");
        setActivity("");
        setTarget("");
        setStatus("");
        // Refresh mark data after saving
        fetchMarks();
      });
  }

  function deleteMark(id) {
    axios
      .post("http://127.0.0.1:8000/deleteMark", { id: id })
      .then(function (response) {
        // Refresh mark data after deletion
        fetchMarks();
      });
  }

  useEffect(() => {
    fetchMarks();
  }, []);

  function fetchMarks() {
    axios.get("http://127.0.0.1:8000/getMark").then(function (response) {
      setMarks(response.data);
    });
  }

  function showModal(id, date, activity, target, status) {
    setDate(date);
    setActivity(activity);
    setTarget(target);
    setStatus(status);
    setModal(true);
    // Save id for later use
    setId(id);
  }

  function closeModal() {
    setModal(false);
  }

  function updateMark(newDate, newActivity, newTarget, newStatus) {
    const data = {
      id: id, // Use the id state here
      date: newDate,
      activity: newActivity,
      target: newTarget,
      status: newStatus,
    };
    axios
      .post("http://127.0.0.1:8000/updateMark", data)
      .then(function (response) {
        // Refresh mark data after update
        fetchMarks();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Marketing And Advertisements</h1>
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
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Target"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Status"
          className="form-control"
        />
        <br />
        <button onClick={saveMark} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <MarkList marks={marks} deleteMark={deleteMark} showModal={showModal} />
        {modal && (
          <EditMark
            id={id}
            date={date}
            activity={activity}
            target={target}
            status={status}
            updateMark={updateMark}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Mark;
