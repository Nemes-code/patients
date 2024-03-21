import React, { useState } from "react";

function ContrList({ contrs, deleteContr, showModal }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter contractors based on the search query
  const filteredContrs = contrs.filter((contr) =>
    contr.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by client"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Client</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {filteredContrs.map((contr) => (
              <tr key={contr.id}>
                <td>{contr.client}</td>
                <td>{contr.phone}</td>
                <td>{contr.email}</td>
                <td>{contr.location}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        contr.id,
                        contr.client,
                        contr.phone,
                        contr.email,
                        contr.location
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteContr(contr.id)}
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

export default ContrList;
