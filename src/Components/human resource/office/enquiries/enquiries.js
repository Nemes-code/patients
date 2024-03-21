import React, { useState, useEffect } from "react";
import axios from "axios";
import EnqList from "./enqList";
import EditEnq from "./editEnq";
import Nav from "../../navigation";

function Enquiries() {
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [enquiries, setEnquiries] = useState([]);
  const [modal, setModal] = useState(false);

  function saveOfe() {
    const data = {
      date: date,
      item: item,
      description: description,
    };
    axios.post("http://127.0.0.1:8000/saveOfe", data).then(function (response) {
      setDate("");
      setItem("");
      setDescription("");
      // Refresh enquiries data after saving
      fetchEnquiries();
    });
  }

  function deleteOfe(id) {
    axios
      .post("http://127.0.0.1:8000/deleteOfe", { id: id })
      .then(function (response) {
        // Refresh enquiries data after deletion
        fetchEnquiries();
      });
  }

  useEffect(() => {
    fetchEnquiries();
  }, []);

  function fetchEnquiries() {
    axios.get("http://127.0.0.1:8000/getOfe").then(function (response) {
      setEnquiries(response.data);
    });
  }

  function showModal(id, date, item, description) {
    setId(id);
    setDate(date);
    setItem(item);
    setDescription(description);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateOfe(newDate, newItem, newDescription) {
    const data = {
      id: id,
      date: newDate,
      item: newItem,
      description: newDescription,
    };
    axios
      .post("http://127.0.0.1:8000/updateOfe", data)
      .then(function (response) {
        // Refresh enquiries data after update
        fetchEnquiries();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Enquiries Management</h1>
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
        <button onClick={saveOfe} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <EnqList
          enquiries={enquiries}
          deleteOfe={deleteOfe}
          showModal={showModal}
        />
        {modal && (
          <EditEnq
            id={id}
            date={date}
            item={item}
            description={description}
            updateOfe={updateOfe}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Enquiries;
