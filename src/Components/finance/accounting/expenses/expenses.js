import React, { useState, useEffect } from "react";
import axios from "axios";
import ExList from "./listExpenses";
import EditEx from "./editExpenses";
import Nav from "../../navigation";

function Expense() {
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [modal, setModal] = useState(false);

  function saveExpense() {
    const data = {
      date: date,
      item: item,
      description: description,
      amount: amount,
    };
    axios.post("http://127.0.0.1:8000/saveex", data).then(function (response) {
      setDate("");
      setItem("");
      setDescription("");
      setAmount("");
      // Refresh expense data after saving
      fetchExpenses();
    });
  }

  function deleteExpense(id) {
    axios
      .post("http://127.0.0.1:8000/deleteex", { id: id })
      .then(function (response) {
        // Refresh expense data after deletion
        fetchExpenses();
      });
  }

  useEffect(() => {
    fetchExpenses();
  }, []);

  function fetchExpenses() {
    axios.get("http://127.0.0.1:8000/getex").then(function (response) {
      setExpenses(response.data);
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

  function updateExpense(newDate, newItem, newDescription, newAmount) {
    const data = {
      id: id,
      date: newDate,
      item: newItem,
      description: newDescription,
      amount: newAmount,
    };
    axios
      .post("http://127.0.0.1:8000/updateex", data)
      .then(function (response) {
        // Refresh expense data after update
        fetchExpenses();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Costs And Expense</h1>
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
        <button onClick={saveExpense} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <ExList
          expenses={expenses}
          deleteExpense={deleteExpense}
          showModal={showModal}
        />
        {modal && (
          <EditEx
            id={id}
            date={date}
            item={item}
            description={description}
            amount={amount}
            updateExpense={updateExpense}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Expense;
