import React, { useState } from "react";

function MarkList({ marks, deleteMark, showModal }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter marks based on the search query
  const filteredMarks = marks.filter((mark) =>
    mark.activity.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by activity"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Activity</th>
              <th>Target</th>
              <th>Status</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {filteredMarks.map((mark) => (
              <tr key={mark.id}>
                <td>{mark.date}</td>
                <td>{mark.activity}</td>
                <td>{mark.target}</td>
                <td>{mark.status}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        mark.id,
                        mark.date,
                        mark.activity,
                        mark.target,
                        mark.status
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteMark(mark.id)}
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

export default MarkList;
