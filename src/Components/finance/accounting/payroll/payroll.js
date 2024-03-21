import React, { useState, useEffect } from "react";
import axios from "axios";
import ListPayroll from "./listPayroll";
import EditPayroll from "./editPayroll";
import Nav from "../../navigation";

function Payroll() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [department, setDepartment] = useState("");
  const [health, setHealth] = useState("");
  const [advance, setAdvance] = useState("");
  const [loan, setLoan] = useState("");
  const [net, setNet] = useState("");
  const [gross, setGross] = useState("");
  const [payrolls, setPayrolls] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  function savePayroll() {
    const data = {
      name: name,
      department: department,
      health: health,
      advance: advance,
      loan: loan,
      net: (
        parseFloat(gross) -
        (parseFloat(health) + parseFloat(advance) + parseFloat(loan))
      ).toString(),
      gross: gross,
    };
    axios.post("http://localhost:8000/savePay", data).then(function (response) {
      setName("");
      setDepartment("");
      setHealth("");
      setAdvance("");
      setLoan("");
      setNet("");
      setGross("");
      fetchPayrolls();
    });
  }

  function deletePayroll(id) {
    axios
      .post("http://localhost:8000/deletePay", { id: id })
      .then(function (response) {
        fetchPayrolls();
      });
  }

  useEffect(() => {
    fetchPayrolls();
  }, []);

  function fetchPayrolls() {
    axios.get("http://localhost:8000/getPay").then(function (response) {
      setPayrolls(response.data);
    });
  }

  function showModal(id, name, department, health, advance, loan, net, gross) {
    setId(id);
    setName(name);
    setDepartment(department);
    setHealth(health);
    setAdvance(advance);
    setLoan(loan);
    setNet(net);
    setGross(gross);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updatePayroll(
    newName,
    newDepartment,
    newHealth,
    newAdvance,
    newLoan,
    newNet,
    newGross
  ) {
    const data = {
      id: id,
      name: newName,
      department: newDepartment,
      health: newHealth,
      advance: newAdvance,
      loan: newLoan,
      net: newNet,
      gross: newGross,
    };
    axios
      .post("http://localhost:8000/updatePay", data)
      .then(function (response) {
        fetchPayrolls();
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Payrolls</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Department"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={health}
          onChange={(e) => setHealth(e.target.value)}
          placeholder="Health"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={advance}
          onChange={(e) => setAdvance(e.target.value)}
          placeholder="Advance"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={loan}
          onChange={(e) => setLoan(e.target.value)}
          placeholder="Loan"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={gross}
          onChange={(e) => setGross(e.target.value)}
          placeholder="Gross"
          className="form-control"
        />
        <br />
        <button onClick={savePayroll} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <ListPayroll
          payrolls={payrolls}
          deletePayroll={deletePayroll}
          showModal={showModal}
        />
        {modal && (
          <EditPayroll
            id={id}
            name={name}
            department={department}
            health={health}
            advance={advance}
            loan={loan}
            net={net}
            gross={gross}
            updatePayroll={updatePayroll}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Payroll;
