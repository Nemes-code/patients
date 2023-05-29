import './Components/App.css';
import Header from './Components/Header';
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [data, setData] = useState([])

  const addData = () => {
    setData([...data, { name, email, contact }])
    setName('')
    setEmail('')
    setContact('')
  }

  const removeItem = (index) => {
    const arr = data; 
    arr.splice(index,1)
    setData([...arr])
  }
  return (
    <div className="App">
      <Header />
      <div>
        <div id="info">
          <Stack direction="row" spacing={2}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              value={name}
              type='text'
              id="outlined-basic"
              label="Name"
              variant="outlined" />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="outlined-basic"
              label="Email"
              variant="outlined" />
            <TextField
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              id="outlined-basic"
              label="Contact No."
              variant="outlined"
            />
            <Button
              onClick={addData}
              id='btn'
              variant="contained"
              color="success">+</Button>
          </Stack>
        </div>
        {/* show data */}
        <div id='show_data'>
          <h4> Name </h4>
          <h4> Email </h4>
          <h4> Contact </h4>
          <h4> Remove </h4>
        </div>
        {
          data.map((element, index) => {
            return (
              <div key={index} id='show_data'>
                <h4> {element.name} </h4>
                <h4> {element.email}</h4>
                <h4> {element.contact}</h4>
                <Button onClick={()=>removeItem(index)} variant="outlined" color="error">
                  <DeleteIcon />
                </Button>
              </div>
            )
          })
        }
      </div>


    </div>
  );
}

export default App;

