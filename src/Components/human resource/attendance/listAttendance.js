import React from "react";

function AttendanceList({ attendance, deleteAttendance, showModal }) {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record) => (
              <tr key={record.id}>
                <td>{record.date}</td>
                <td>{record.name}</td>
                <td>{record.time_in}</td>
                <td>{record.time_out}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        record.id,
                        record.date,
                        record.name,
                        record.time_in,
                        record.time_out
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteAttendance(record.id)}
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

export default AttendanceList;
