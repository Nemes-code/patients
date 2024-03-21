import React, { useState } from "react";

function ShiftList({ shifts, deleteShift, showModal }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter shifts based on the search query
  const filteredShifts = shifts.filter((shift) =>
    shift.name.toLowerCase().includes(searchQuery.toLowerCase())
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
              <th>Shift Name</th>
              <th>Site</th>
              <th>Date</th>
              <th>Shift</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {filteredShifts.map((shift) => (
              <tr key={shift.id}>
                <td>{shift.name}</td>
                <td>{shift.site}</td>
                <td>{shift.date}</td>
                <td>{shift.shift}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        shift.id,
                        shift.name,
                        shift.site,
                        shift.date,
                        shift.shift
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteShift(shift.id)}
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

export default ShiftList;
