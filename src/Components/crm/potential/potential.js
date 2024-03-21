import React, { useState, useEffect } from "react";
import axios from "axios";
import PotList from "./listPotential";
import EditPot from "./editPotential";
import Nav from "../navigation";

function Potential() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [potentials, setPotentials] = useState([]);
  const [modal, setModal] = useState(false);

  function savePotential() {
    const data = {
      name: name,
      phone: phone,
      email: email,
      location: location,
    };
    axios.post("http://127.0.0.1:8000/savePot", data).then(function (response) {
      setName("");
      setPhone("");
      setEmail("");
      setLocation("");
      // Refresh potential data after saving
      fetchPotentials();
    });
  }

  function deletePotential(id) {
    axios
      .post("http://127.0.0.1:8000/deletePot", { id: id })
      .then(function (response) {
        // Refresh potential data after deletion
        fetchPotentials();
      });
  }

  useEffect(() => {
    fetchPotentials();
  }, []);

  function fetchPotentials() {
    axios.get("http://127.0.0.1:8000/getPot").then(function (response) {
      setPotentials(response.data);
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

  function updatePotential(newName, newPhone, newEmail, newLocation) {
    const data = {
      id: id,
      name: newName,
      phone: newPhone,
      email: newEmail,
      location: newLocation,
    };
    axios
      .post("http://127.0.0.1:8000/updatePot", data)
      .then(function (response) {
        // Refresh potential data after update
        fetchPotentials();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Potential Customers</h1>
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
        <button
          onClick={savePotential}
          type="button"
          className="btn btn-primary"
        >
          Save
        </button>
        <br />
        <br />

        <PotList
          potentials={potentials}
          deletePotential={deletePotential}
          showModal={showModal}
        />
        {modal && (
          <EditPot
            id={id}
            name={name}
            phone={phone}
            email={email}
            location={location}
            updatePotential={updatePotential}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Potential;
