import React from "react";

function IcList({ ictReports, deleteIctr, showModal }) {
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
            {ictReports.map((ictReport) => (
              <tr key={ictReport.id}>
                <td>{ictReport.date}</td>
                <td>{ictReport.report}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(ictReport.id, ictReport.date, ictReport.report)
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteIctr(ictReport.id)}
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

export default IcList;
