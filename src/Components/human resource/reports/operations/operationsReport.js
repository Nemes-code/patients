import React, { useState, useEffect } from "react";
import axios from "axios";
import OpreList from "./opreList";
import EditOpre from "./editOpre";
import Nav from "../../navigation";

function OperationReport() {
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [report, setReport] = useState("");
  const [operationReports, setOperationReports] = useState([]);
  const [modal, setModal] = useState(false);

  function saveOpre() {
    const data = {
      date: date,
      report: report,
    };
    axios
      .post("http://127.0.0.1:8000/saveopre", data)
      .then(function (response) {
        setDate("");
        setReport("");
        // Refresh operation reports data after saving
        fetchOperationReports();
      });
  }

  function deleteOpre(id) {
    axios
      .post("http://127.0.0.1:8000/deleteopre", { id: id })
      .then(function (response) {
        // Refresh operation reports data after deletion
        fetchOperationReports();
      });
  }

  useEffect(() => {
    fetchOperationReports();
  }, []);

  function fetchOperationReports() {
    axios.get("http://127.0.0.1:8000/getopre").then(function (response) {
      setOperationReports(response.data);
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

  function updateOpre(newDate, newReport) {
    const data = {
      id: id,
      date: newDate,
      report: newReport,
    };
    axios
      .post("http://127.0.0.1:8000/updateopre", data)
      .then(function (response) {
        // Refresh operation reports data after update
        fetchOperationReports();
        // Close modal after updating
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Operation Reports Management</h1>
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
        <button onClick={saveOpre} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <OpreList
          operationReports={operationReports}
          deleteOpre={deleteOpre}
          showModal={showModal}
        />
        {modal && (
          <EditOpre
            id={id}
            date={date}
            report={report}
            updateOpre={updateOpre}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default OperationReport;
