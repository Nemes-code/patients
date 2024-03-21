import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./customerList";
import EditModal from "./editCustomer";
import Nav from "../navigation";

function Customer() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  function saveCustomer() {
    const data = {
      name: name,
      address: address,
      phone: phone,
      email: email,
    };
    axios
      .post("http://localhost:8000/saveCustomer", data)
      .then(function (response) {
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");
        fetchData();
      });
  }

  function deleteCustomer(customerId) {
    axios
      .post("http://localhost:8000/deleteCustomer", { id: customerId })
      .then(function (response) {
        fetchData();
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get("http://localhost:8000/getCustomer").then(function (response) {
      setUsers(response.data);
    });
  }

  function showModal(
    customerId,
    customerName,
    customerAddress,
    customerPhone,
    customerEmail
  ) {
    setId(customerId);
    setName(customerName);
    setAddress(customerAddress);
    setPhone(customerPhone);
    setEmail(customerEmail);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateCustomer(newName, newAddress, newPhone, newEmail) {
    const data = {
      id: id,
      name: newName,
      address: newAddress,
      phone: newPhone,
      email: newEmail,
    };
    axios
      .post("http://localhost:8000/updateCustomer", data)
      .then(function (response) {
        fetchData();
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Customers</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Customer Name"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Customer Address"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Customer Phone"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Customer Email"
          className="form-control"
        />
        <br />
        <button
          onClick={saveCustomer}
          type="button"
          className="btn btn-primary"
        >
          Save
        </button>
        <br />
        <br />

        <UserList
          users={users}
          deleteCustomer={deleteCustomer}
          search={search}
          showModal={showModal}
        />
        {modal && (
          <EditModal
            id={id}
            name={name}
            address={address}
            phone={phone}
            email={email}
            updateCustomer={updateCustomer}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Customer;
