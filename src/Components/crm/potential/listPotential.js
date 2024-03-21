import React from "react";

function PotList({ potentials, deletePotential, showModal }) {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {potentials.map((potential) => (
              <tr key={potential.id}>
                <td>{potential.name}</td>
                <td>{potential.phone}</td>
                <td>{potential.email}</td>
                <td>{potential.location}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        potential.id,
                        potential.name,
                        potential.phone,
                        potential.email,
                        potential.location
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePotential(potential.id)}
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

export default PotList;
