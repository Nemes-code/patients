import React, { useState, useEffect } from "react";
import axios from "axios";
import BidsList from "./bidList";
import EditBids from "./editBid";
import Nav from "../navigation";

function Bids() {
  const [client, setClient] = useState("");
  const [id, setId] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [bids, setBids] = useState([]);
  const [modal, setModal] = useState(false);

  function saveBid() {
    const data = {
      client: client,
      task: task,
      date: date,
      price: price,
    };
    axios.post("http://127.0.0.1:8000/saveBid", data).then(function (response) {
      setClient("");
      setTask("");
      setDate("");
      setPrice("");
      // Refresh bid data after saving
      fetchBids();
    });
  }

  function deleteBid(id) {
    axios
      .post("http://127.0.0.1:8000/deleteBid", { id: id })
      .then(function (response) {
        // Refresh bid data after deletion
        fetchBids();
      });
  }

  useEffect(() => {
    fetchBids();
  }, []);

  function fetchBids() {
    axios.get("http://127.0.0.1:8000/getBid").then(function (response) {
      setBids(response.data);
    });
  }

  function showModal(id, client, task, date, price) {
    setId(id);
    setClient(client);
    setTask(task);
    setDate(date);
    setPrice(price);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateBid(newClient, newTask, newDate, newPrice) {
    const data = {
      id: id,
      client: newClient,
      task: newTask,
      date: newDate,
      price: newPrice,
    };
    axios
      .post("http://127.0.0.1:8000/updateBid", data)
      .then(function (response) {
        // Refresh bid data after update
        fetchBids();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Offers</h1>
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
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task"
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
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="form-control"
        />
        <br />
        <button onClick={saveBid} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <BidsList bids={bids} deleteBid={deleteBid} showModal={showModal} />
        {modal && (
          <EditBids
            id={id}
            client={client}
            task={task}
            date={date}
            price={price}
            updateBid={updateBid}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Bids;
