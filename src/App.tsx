import React, { useEffect, useRef, useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function App() {
  const [parkingSpaces, setParkingSpaces] = useState<string>("");

  const inputRef = useRef<any>("");

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParkingSpaces(event.target.value);
  };
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/parking", { state: parkingSpaces });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Paper
        elevation={20}
        sx={{
          width: "50%",
          margin: "auto",
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0 50px 0",
          background:
            "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
          bgcolor: "rgb(18, 18, 18)",
        }}
      >
        <h1 style={{ color: "white" }}>Welcome to Parking App</h1>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <TextField
            fullWidth
            value={parkingSpaces}
            onChange={handleChange}
            inputRef={inputRef}
            id="parking-create-text-input"
            label="Number of Parking Spaces..."
            type="number"
            variant="filled"
            sx={{ margin: "30px 0", color: "white" }}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            id="parking-create-submit-button"
            endIcon={<Send />}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default App;
