import React, { useState, useEffect } from "react";
import axios from "axios";
import CompList from "./listCompanies";
import EditComp from "./editCoompanies";
import Nav from "../navigation";

function Comp() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [comps, setComps] = useState([]);
  const [modal, setModal] = useState(false);

  function saveComp() {
    const data = {
      name: name,
      phone: phone,
      email: email,
      location: location,
    };
    axios
      .post("http://127.0.0.1:8000/saveComp", data)
      .then(function (response) {
        setName("");
        setPhone("");
        setEmail("");
        setLocation("");
        // Refresh company data after saving
        fetchComps();
      });
  }

  function deleteComp(id) {
    axios
      .post("http://127.0.0.1:8000/deleteComp", { id: id })
      .then(function (response) {
        // Refresh company data after deletion
        fetchComps();
      });
  }

  useEffect(() => {
    fetchComps();
  }, []);

  function fetchComps() {
    axios.get("http://127.0.0.1:8000/getComp").then(function (response) {
      setComps(response.data);
    });
  }

  function showModal(id, name, phone, email, location) {
    setId(id);
    setName(name);
    setPhone(phone);
    setEmail(email);
    setLocation(location);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateComp(newName, newPhone, newEmail, newLocation) {
    const data = {
      id: id,
      name: newName,
      phone: newPhone,
      email: newEmail,
      location: newLocation,
    };
    axios
      .post("http://127.0.0.1:8000/updateComp", data)
      .then(function (response) {
        // Refresh company data after update
        fetchComps();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Companies list</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Company Name"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="form-control"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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
        <button onClick={saveComp} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <CompList comps={comps} deleteComp={deleteComp} showModal={showModal} />
        {modal && (
          <EditComp
            id={id}
            name={name}
            phone={phone}
            email={email}
            location={location}
            updateComp={updateComp}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Comp;
