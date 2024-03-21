import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./userList";
import EditModal from "./editModal";
import Nav from "../navigation";

function Operations() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [address, setAddress] = useState("");
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  function saveData() {
    var data = new FormData();
    data.append("method", "saveData");
    data.append("name", name);
    data.append("address", address);
    axios
      .post("http://localhost:8000/saveData", data)
      .then(function (response) {
        setName("");
        setAddress("");
        // Refresh user data after saving
        fetchData();
      });
  }

  function deleteUser(id) {
    var data = new FormData();
    data.append("method", "deleteUser");
    data.append("id", id);
    axios
      .post("http://localhost:8000/deleteUser", data)
      .then(function (response) {
        // Refresh user data after deletion
        fetchData();
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    var data = new FormData();
    data.append("method", "getData");
    axios.get("http://localhost:8000/getData", data).then(function (response) {
      setUsers(response.data);
    });
  }

  function showModal(id, name, address) {
    setId(id);
    setName(name);
    setAddress(address);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateData(newName, newAddress) {
    var data = new FormData();
    data.append("method", "updateUser");
    data.append("id", id);
    data.append("name", newName);
    data.append("address", newAddress);
    axios
      .post("http://localhost:8000/updateUser", data)
      .then(function (response) {
        // Refresh user data after update
        fetchData();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Operations</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Guard Name"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Guard Location"
          className="form-control"
        />
        <br />
        <button onClick={saveData} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <UserList
          users={users}
          deleteUser={deleteUser}
          search={search}
          showModal={showModal}
        />
        {modal && (
          <EditModal
            id={id}
            name={name}
            address={address}
            updateData={updateData}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Operations;
