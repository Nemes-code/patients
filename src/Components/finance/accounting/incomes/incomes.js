import React, { useState, useEffect } from "react";
import axios from "axios";
import IncList from "./listIncomes";
import EditInc from "./editIncomes";
import Nav from "../../navigation";

function Income() {
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [income, setIncome] = useState([]);
  const [modal, setModal] = useState(false);

  function saveIncome() {
    const data = {
      date: date,
      item: item,
      description: description,
      amount: amount,
    };
    axios.post("http://127.0.0.1:8000/saveinc", data).then(function (response) {
      setDate("");
      setItem("");
      setDescription("");
      setAmount("");
      // Refresh income data after saving
      fetchIncome();
    });
  }

  function deleteIncome(id) {
    axios
      .post("http://127.0.0.1:8000/deleteinc", { id: id })
      .then(function (response) {
        // Refresh income data after deletion
        fetchIncome();
      });
  }

  useEffect(() => {
    fetchIncome();
  }, []);

  function fetchIncome() {
    axios.get("http://127.0.0.1:8000/getinc").then(function (response) {
      setIncome(response.data);
    });
  }

  function showModal(id, date, item, description, amount) {
    setId(id);
    setDate(date);
    setItem(item);
    setDescription(description);
    setAmount(amount);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateIncome(newDate, newItem, newDescription, newAmount) {
    const data = {
      id: id,
      date: newDate,
      item: newItem,
      description: newDescription,
      amount: newAmount,
    };
    axios
      .post("http://127.0.0.1:8000/updateinc", data)
      .then(function (response) {
        // Refresh income data after update
        fetchIncome();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Income And Profits</h1>
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
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Item"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="form-control"
        />
        <br />
        <button onClick={saveIncome} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <IncList
          income={income}
          deleteIncome={deleteIncome}
          showModal={showModal}
        />
        {modal && (
          <EditInc
            id={id}
            date={date}
            item={item}
            description={description}
            amount={amount}
            updateIncome={updateIncome}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Income;
