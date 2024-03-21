import React from "react";

function IctList({ ictDeals, deleteIctDeal, showModal }) {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Activity</th>
              <th>Location</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {ictDeals.map((deal) => (
              <tr key={deal.id}>
                <td>{deal.date}</td>
                <td>{deal.activity}</td>
                <td>{deal.location}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        deal.id,
                        deal.date,
                        deal.activity,
                        deal.location
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteIctDeal(deal.id)}
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

export default IctList;
