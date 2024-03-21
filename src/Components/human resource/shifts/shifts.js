import React, { useState, useEffect } from "react";
import axios from "axios";
import ShiftList from "./shiftLIst";
import EditShift from "./editShifts";
import Nav from "../navigation";

function Shifts() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [site, setSite] = useState("");
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");
  const [shifts, setShifts] = useState([]);
  const [modal, setModal] = useState(false);

  function saveShift() {
    const data = {
      name: name,
      site: site,
      date: date,
      shift: shift,
    };
    axios
      .post("http://localhost:8000/saveShift", data)
      .then(function (response) {
        setName("");
        setSite("");
        setDate("");
        setShift("");
        // Refresh shift data after saving
        fetchShifts();
      });
  }

  function deleteShift(id) {
    axios
      .post("http://localhost:8000/deleteShift", { id: id })
      .then(function (response) {
        // Refresh shift data after deletion
        fetchShifts();
      });
  }

  useEffect(() => {
    fetchShifts();
  }, []);

  function fetchShifts() {
    axios.get("http://localhost:8000/getShift").then(function (response) {
      setShifts(response.data);
    });
  }

  function showModal(id, name, site, date, shift) {
    setId(id);
    setName(name);
    setSite(site);
    setDate(date);
    setShift(shift);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateShift(newName, newSite, newDate, newShift) {
    const data = {
      id: id,
      name: newName,
      site: newSite,
      date: newDate,
      shift: newShift,
    };
    axios
      .post("http://localhost:8000/updateShift", data)
      .then(function (response) {
        // Refresh shift data after update
        fetchShifts();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Human Resource</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Shift Name"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          placeholder="Site"
          className="form-control"
        />
        <br />
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
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          placeholder="Shift"
          className="form-control"
        />
        <br />
        <button onClick={saveShift} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <ShiftList
          shifts={shifts}
          deleteShift={deleteShift}
          showModal={showModal}
        />
        {modal && (
          <EditShift
            id={id}
            name={name}
            site={site}
            date={date}
            shift={shift}
            updateShift={updateShift}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Shifts;
