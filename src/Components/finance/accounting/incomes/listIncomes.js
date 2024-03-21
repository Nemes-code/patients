import React from "react";

function IncList({ income, deleteIncome, showModal }) {
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {income.map((incomeItem) => (
              <tr key={incomeItem.id}>
                <td>{incomeItem.date}</td>
                <td>{incomeItem.item}</td>
                <td>{incomeItem.description}</td>
                <td>{incomeItem.amount}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        incomeItem.id,
                        incomeItem.date,
                        incomeItem.item,
                        incomeItem.description,
                        incomeItem.amount
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteIncome(incomeItem.id)}
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

export default IncList;
