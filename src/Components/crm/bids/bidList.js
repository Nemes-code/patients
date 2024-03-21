import React, { useState } from "react";

function BidsList({ bids, deleteBid, showModal }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter bids based on the search query
  const filteredBids = bids.filter((bid) =>
    bid.client.toLowerCase().includes(searchQuery.toLowerCase())
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
              <th>Task</th>
              <th>Date</th>
              <th>Price</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {filteredBids.map((bid) => (
              <tr key={bid.id}>
                <td>{bid.client}</td>
                <td>{bid.task}</td>
                <td>{bid.date}</td>
                <td>{bid.price}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        bid.id,
                        bid.client,
                        bid.task,
                        bid.date,
                        bid.price
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBid(bid.id)}
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

export default BidsList;
