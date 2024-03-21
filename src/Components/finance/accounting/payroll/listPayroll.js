import React, { useState } from "react";

function ListPayroll({ payrolls, deletePayroll, showModal }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter payrolls based on the search query
  const filteredPayrolls = payrolls.filter((payroll) =>
    payroll.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Health</th>
              <th>Advance</th>
              <th>Loan</th>
              <th>Net</th>
              <th>Gross</th> {/* New field added here */}
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayrolls.map((payroll) => (
              <tr key={payroll.id}>
                <td>{payroll.name}</td>
                <td>{payroll.department}</td>
                <td>{payroll.health}</td>
                <td>{payroll.advance}</td>
                <td>{payroll.loan}</td>
                <td>{payroll.net}</td>
                <td>{payroll.gross}</td>{" "}
                {/* Render the value of the new field */}
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        payroll.id,
                        payroll.name,
                        payroll.department,
                        payroll.health,
                        payroll.advance,
                        payroll.loan,
                        payroll.net
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePayroll(payroll.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPayroll;
