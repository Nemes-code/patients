import React from "react";

function HrList({ hrReports, deleteHrr, showModal }) {
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
            {hrReports.map((hrReport) => (
              <tr key={hrReport.id}>
                <td>{hrReport.date}</td>
                <td>{hrReport.report}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(hrReport.id, hrReport.date, hrReport.report)
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHrr(hrReport.id)}
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

export default HrList;
