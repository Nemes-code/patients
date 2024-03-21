import React, { useState } from "react";

function CompList({ comps, deleteComp, showModal }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter companies based on the search query
  const filteredComps = comps.filter((comp) =>
    comp.name.toLowerCase().includes(searchQuery.toLowerCase())
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
              <th>Company Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {filteredComps.map((comp) => (
              <tr key={comp.id}>
                <td>{comp.name}</td>
                <td>{comp.phone}</td>
                <td>{comp.email}</td>
                <td>{comp.location}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        comp.id,
                        comp.name,
                        comp.phone,
                        comp.email,
                        comp.location
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteComp(comp.id)}
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

export default CompList;
