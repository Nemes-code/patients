import React, { useState, useEffect } from "react";
import axios from "axios";
import AttendanceList from "./listAttendance";
import EditAttendance from "./editAttendance";
import Nav from "../navigation";

function Attendance() {
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [attendance, setAttendance] = useState([]);
  const [modal, setModal] = useState(false);

  function saveAttendance() {
    const data = {
      date: date,
      name: name,
      time_in: timeIn,
      time_out: timeOut,
    };
    axios.post("http://127.0.0.1:8000/saveat", data).then(function (response) {
      setDate("");
      setName("");
      setTimeIn("");
      setTimeOut("");
      // Refresh attendance data after saving
      fetchAttendance();
    });
  }

  function deleteAttendance(id) {
    axios
      .post("http://127.0.0.1:8000/deleteat", { id: id })
      .then(function (response) {
        // Refresh attendance data after deletion
        fetchAttendance();
      });
  }

  useEffect(() => {
    fetchAttendance();
  }, []);

  function fetchAttendance() {
    axios.get("http://127.0.0.1:8000/getat").then(function (response) {
      setAttendance(response.data);
    });
  }

  function showModal(id, date, name, time_in, time_out) {
    setId(id);
    setDate(date);
    setName(name);
    setTimeIn(time_in);
    setTimeOut(time_out);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateAttendance(newDate, newName, newTimeIn, newTimeOut) {
    const data = {
      id: id,
      date: newDate,
      name: newName,
      time_in: newTimeIn,
      time_out: newTimeOut,
    };
    axios
      .post("http://127.0.0.1:8000/updateat", data)
      .then(function (response) {
        // Refresh attendance data after update
        fetchAttendance();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Attendance Management</h1>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={timeIn}
          onChange={(e) => setTimeIn(e.target.value)}
          placeholder="Time In"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={timeOut}
          onChange={(e) => setTimeOut(e.target.value)}
          placeholder="Time Out"
          className="form-control"
        />
        <br />
        <button
          onClick={saveAttendance}
          type="button"
          className="btn btn-primary"
        >
          Save
        </button>
        <br />
        <br />

        <AttendanceList
          attendance={attendance}
          deleteAttendance={deleteAttendance}
          showModal={showModal}
        />
        {modal && (
          <EditAttendance
            id={id}
            date={date}
            name={name}
            timeIn={timeIn}
            timeOut={timeOut}
            updateAttendance={updateAttendance}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Attendance;
