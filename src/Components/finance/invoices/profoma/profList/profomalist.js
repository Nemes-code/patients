import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfList from "./proflist";
import EditProf from "./editProf";
import Nav from "../../../navigation";

function ProfomaList() {
  const [lists, setLists] = useState([]);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [status, setStatus] = useState("");

  function deleteList(listId) {
    axios
      .post("http://127.0.0.1:8000/deleteProf", { id: listId })
      .then(function (response) {
        fetchLists();
      });
  }

  useEffect(() => {
    fetchLists();
  }, []);

  function fetchLists() {
    axios.get("http://127.0.0.1:8000/getProf").then(function (response) {
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
      .post("http://127.0.0.1:8000/updateProf", data)
      .then(function (response) {
        fetchLists();
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Profoma Lists</h1>
        <ProfList lists={lists} deleteList={deleteList} showModal={showModal} />
        {modal && (
          <EditProf
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

export default ProfomaList;
