import React, { useState } from "react";
import "../../../../../index.css";

function ListList({ lists, deleteList, search, showModal }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter lists based on the search query
  const filteredLists = lists.filter((list) =>
    list.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by number"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Invoice Date</th>
              <th>Invoice Customer</th>
              <th>Invoice Status</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {filteredLists.map((list) => (
              <tr key={list.id}>
                <td>{list.number}</td>
                <td>{list.date}</td>
                <td>{list.customer}</td>
                <td>{list.status}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        list.id,
                        list.number,
                        list.date,
                        list.customer,
                        list.status
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteList(list.id)}
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

export default ListList;
