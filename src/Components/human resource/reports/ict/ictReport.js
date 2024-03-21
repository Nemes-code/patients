import React, { useState, useEffect } from "react";
import axios from "axios";
import IcList from "./icList";
import EditIc from "./editIc";
import Nav from "../../navigation";

function ICTREP() {
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [report, setReport] = useState("");
  const [ictReports, setIctReports] = useState([]);
  const [modal, setModal] = useState(false);

  function saveIctr() {
    const data = {
      date: date,
      report: report,
    };
    axios
      .post("http://127.0.0.1:8000/saveictr", data)
      .then(function (response) {
        setDate("");
        setReport("");
        // Refresh ICT reports data after saving
        fetchIctReports();
      });
  }

  function deleteIctr(id) {
    axios
      .post("http://127.0.0.1:8000/deleteictr", { id: id })
      .then(function (response) {
        // Refresh ICT reports data after deletion
        fetchIctReports();
      });
  }

  useEffect(() => {
    fetchIctReports();
  }, []);

  function fetchIctReports() {
    axios.get("http://127.0.0.1:8000/getictr").then(function (response) {
      setIctReports(response.data);
    });
  }

  function showModal(id, date, report) {
    setId(id);
    setDate(date);
    setReport(report);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateIctr(newDate, newReport) {
    const data = {
      id: id,
      date: newDate,
      report: newReport,
    };
    axios
      .post("http://127.0.0.1:8000/updateictr", data)
      .then(function (response) {
        // Refresh ICT reports data after update
        fetchIctReports();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>ICT Reports Management</h1>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          className="form-control"
        />
        <br />
        <textarea
          value={report}
          onChange={(e) => setReport(e.target.value)}
          placeholder="Report"
          className="form-control"
        />
        <br />
        <button onClick={saveIctr} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <IcList
          ictReports={ictReports}
          deleteIctr={deleteIctr}
          showModal={showModal}
        />
        {modal && (
          <EditIc
            id={id}
            date={date}
            report={report}
            updateIctr={updateIctr}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default ICTREP;
