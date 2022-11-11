import React from "react";
import TextField from "@mui/material/TextField";
import "../css/additional-styles/searchbar.css";

const App = () => {
  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Find Apps"
        />
      </div>

    </div>
  );
}

export default App;