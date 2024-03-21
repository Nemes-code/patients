import React, { useState, useEffect } from "react";
import axios from "axios";
import ListList from "./invoiceList";
import EditModal from "./editInvoices";
import Nav from "../../../navigation";

function Invoices() {
  const [lists, setLists] = useState([]);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [status, setStatus] = useState("");

  function deleteList(listId) {
    axios
      .post("http://localhost:8000/deleteList", { id: listId })
      .then(function (response) {
        fetchLists();
      });
  }

  useEffect(() => {
    fetchLists();
  }, []);

  function fetchLists() {
    axios.get("http://localhost:8000/getList").then(function (response) {
      setLists(response.data);
    });
  }

  function showModal(listId, listNumber, listDate, listCustomer, listStatus) {
    setId(listId);
    setNumber(listNumber);
    setDate(listDate);
    setCustomer(listCustomer);
    setStatus(listStatus);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateList(newNumber, newDate, newCustomer, newStatus) {
    const data = {
      id: id,
      number: newNumber,
      date: newDate,
      customer: newCustomer,
      status: newStatus,
    };
    axios
      .post("http://localhost:8000/updateList", data)
      .then(function (response) {
        fetchLists();
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Invoices LIst</h1>
        <ListList lists={lists} deleteList={deleteList} showModal={showModal} />
        {modal && (
          <EditModal
            id={id}
            number={number}
            date={date}
            customer={customer}
            status={status}
            updateList={updateList}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Invoices;
