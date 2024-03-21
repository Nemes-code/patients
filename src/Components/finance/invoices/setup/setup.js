import React, { useState, useEffect } from "react";
import axios from "axios";
import SettingList from "./setupList";
import EditModal from "./editSetup";
import Nav from "../../navigation";

function Settings() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [settings, setSettings] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  function saveSetting() {
    const data = {
      name: name,
      address: address,
      phone: phone,
      email: email,
    };
    axios
      .post("http://localhost:8000/saveSetting", data)
      .then(function (response) {
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");
        fetchSettings();
      });
  }

  function deleteSetting(settingId) {
    axios
      .post("http://localhost:8000/deleteSetting", { id: settingId })
      .then(function (response) {
        fetchSettings();
      });
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  function fetchSettings() {
    axios.get("http://localhost:8000/getSetting").then(function (response) {
      setSettings(response.data);
    });
  }

  function showModal(
    settingId,
    settingName,
    settingAddress,
    settingPhone,
    settingEmail
  ) {
    setId(settingId);
    setName(settingName);
    setAddress(settingAddress);
    setPhone(settingPhone);
    setEmail(settingEmail);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function updateSetting(newName, newAddress, newPhone, newEmail) {
    const data = {
      id: id,
      name: newName,
      address: newAddress,
      phone: newPhone,
      email: newEmail,
    };
    axios
      .post("http://localhost:8000/updateSetting", data)
      .then(function (response) {
        fetchSettings();
        closeModal();
      });
  }

  return (
    <div className="d-flex">
      <Nav />
      <div className="container">
        <h1>Invoice Settings</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Setting Name"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Setting Address"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Setting Phone"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Setting Email"
          className="form-control"
        />
        <br />
        <button onClick={saveSetting} type="button" className="btn btn-primary">
          Save
        </button>
        <br />
        <br />

        <SettingList
          settings={settings}
          deleteSetting={deleteSetting}
          search={search}
          showModal={showModal}
        />
        {modal && (
          <EditModal
            id={id}
            name={name}
            address={address}
            phone={phone}
            email={email}
            updateSetting={updateSetting}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default Settings;
