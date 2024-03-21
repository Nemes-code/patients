import React, { useState, useEffect } from "react";
import axios from "axios";
import HrList from "./hrlist";
import EditHr from "./edithr";
import Nav from "../../navigation";

function HrReport() {
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [report, setReport] = useState("");
  const [hrReports, setHrReports] = useState([]);
  const [modal, setModal] = useState(false);

  function saveHrr() {
    const data = {
      date: date,
      report: report,
    };
    axios.post("http://127.0.0.1:8000/savehrr", data).then(function (response) {
      setDate("");
      setReport("");
      // Refresh HR reports data after saving
      fetchHrReports();
    });
  }

  function deleteHrr(id) {
    axios
      .post("http://127.0.0.1:8000/deletehrr", { id: id })
      .then(function (response) {
        // Refresh HR reports data after deletion
        fetchHrReports();
      });
  }

  useEffect(() => {
    fetchHrReports();
  }, []);

  function fetchHrReports() {
    axios.get("http://127.0.0.1:8000/gethrr").then(function (response) {
      setHrReports(response.data);
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

  function updateHrr(newDate, newReport) {
    const data = {
      id: id,
      date: newDate,
      report: newReport,
    };
    axios
      .post("http://127.0.0.1:8000/updatehrr", data)
      .then(function (response) {
        // Refresh HR reports data after update
        fetchHrReports();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>HR Reports Management</h1>
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
        <button onClick={saveHrr} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <HrList
          hrReports={hrReports}
          deleteHrr={deleteHrr}
          showModal={showModal}
        />
        {modal && (
          <EditHr
            id={id}
            date={date}
            report={report}
            updateHrr={updateHrr}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default HrReport;
