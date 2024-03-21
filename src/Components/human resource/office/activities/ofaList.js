import React from "react";

function OfaList({ officeActivities, deleteOfa, showModal }) {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {officeActivities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.date}</td>
                <td>{activity.description}</td>
                <td>{activity.amount}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        activity.id,
                        activity.date,
                        activity.description,
                        activity.amount
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteOfa(activity.id)}
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

export default OfaList;
