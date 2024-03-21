import React from "react";

function OpreList({ operationReports, deleteOpre, showModal }) {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Report</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {operationReports.map((opre) => (
              <tr key={opre.id}>
                <td>{opre.date}</td>
                <td>{opre.report}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => showModal(opre.id, opre.date, opre.report)}
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteOpre(opre.id)}
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

export default OpreList;
