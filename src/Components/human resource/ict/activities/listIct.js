import React from "react";

function IctList({ ictActivities, deleteIctActivity, showModal }) {
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
            {ictActivities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.date}</td>
                <td>{activity.activity}</td>
                <td>{activity.location}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        activity.id,
                        activity.date,
                        activity.activity,
                        activity.location
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteIctActivity(activity.id)}
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
