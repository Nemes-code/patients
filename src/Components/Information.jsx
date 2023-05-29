import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";
import { Stack } from "@mui/material";
 

const Information = () => {
  return (
    <div>
      <div id="info">
        <Stack direction="row" spacing={2}>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Contact No."
            variant="outlined"
          />
          <Button id='btn' variant="contained" color="success">+</Button>
        </Stack>
      </div>
    </div>
  );
};

export default Information;
