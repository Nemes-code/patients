import React, { useState } from "react";
import "../../.././../index.css";

function SettingList({ settings, deleteSetting, search, showModal }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter settings based on the search query
  const filteredSettings = settings.filter((setting) =>
    setting.name.toLowerCase().includes(searchQuery.toLowerCase())
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
              <th>Setting Name</th>
              <th>Setting Address</th>
              <th>Setting Phone</th>
              <th>Setting Email</th>
              <th>Modifications</th>
            </tr>
          </thead>
          <tbody>
            {filteredSettings.map((setting) => (
              <tr key={setting.id}>
                <td>{setting.name}</td>
                <td>{setting.address}</td>
                <td>{setting.phone}</td>
                <td>{setting.email}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      showModal(
                        setting.id,
                        setting.name,
                        setting.address,
                        setting.phone,
                        setting.email
                      )
                    }
                  >
                    Edit
                  </button>
                  {" -- "}
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteSetting(setting.id)}
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

export default SettingList;
