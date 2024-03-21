import React, { useState, useEffect } from "react";
import axios from "axios";
import ContrList from "./listContracts";
import EditContr from "./editContracts";
import Nav from "../navigation";

function Contr() {
  const [client, setClient] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [contrs, setContrs] = useState([]);
  const [modal, setModal] = useState(false);

  function saveContr() {
    const data = {
      client: client,
      phone: phone,
      email: email,
      location: location,
    };
    axios
      .post("http://127.0.0.1:8000/saveContr", data)
      .then(function (response) {
        setClient("");
        setPhone("");
        setEmail("");
        setLocation("");
        // Refresh contract data after saving
        fetchContrs();
      });
  }

  function deleteContr(id) {
    axios
      .post("http://127.0.0.1:8000/deleteContr", { id: id })
      .then(function (response) {
        // Refresh contract data after deletion
        fetchContrs();
      });
  }

  useEffect(() => {
    fetchContrs();
  }, []);

  function fetchContrs() {
    axios.get("http://127.0.0.1:8000/getContr").then(function (response) {
      setContrs(response.data);
    });
  }

  function showModal(id, client, phone, email, location) {
    setId(id);
    setClient(client);
    setPhone(phone);
    setEmail(email);
    setLocation(location);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateContr(newClient, newPhone, newEmail, newLocation) {
    const data = {
      id: id,
      client: newClient,
      phone: newPhone,
      email: newEmail,
      location: newLocation,
    };
    axios
      .post("http://127.0.0.1:8000/updateContr", data)
      .then(function (response) {
        // Refresh contract data after update
        fetchContrs();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Contracts</h1>
        <input
          type="text"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          placeholder="Client"
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
        <button onClick={saveContr} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <ContrList
          contrs={contrs}
          deleteContr={deleteContr}
          showModal={showModal}
        />
        {modal && (
          <EditContr
            id={id}
            client={client}
            phone={phone}
            email={email}
            location={location}
            updateContr={updateContr}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Contr;
