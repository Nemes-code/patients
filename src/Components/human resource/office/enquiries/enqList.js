import React from "react";

function EnqList({ enquiries, deleteOfe, showModal }) {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Description</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id}>
                <td>{enquiry.date}</td>
                <td>{enquiry.item}</td>
                <td>{enquiry.description}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        enquiry.id,
                        enquiry.date,
                        enquiry.item,
                        enquiry.description
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteOfe(enquiry.id)}
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

export default EnqList;
