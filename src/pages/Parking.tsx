import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ParkingSpace from "../components/ParkingSpace";
import { Snackbar, Alert, Button, Paper } from "@mui/material";
import "../styles/Parking.css";
import { Add } from "@mui/icons-material";
import Registration from "../components/Registration";
import { CarDetails } from "../types";

const Parking = () => {
  const [toast, setToast] = useState<boolean>(false);
  const [regModal, setRegModal] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [regDetails, setRegDetails] = useState<string>("");
  const [carsParked, setCarsParked] = useState<Array<CarDetails>>([]);

  const { state } = useLocation();
  const numberOfParkingsString = state as string;
  const numberOfParkings = parseInt(numberOfParkingsString);

  const [availableParkings, setAvailableParkings] = useState<Array<number>>(
    () => [...Array(numberOfParkings + 1).keys()].slice(1)
  );

  let parkingBoxes = [];
  for (let i = 1; i <= numberOfParkings; i++) {
    parkingBoxes.push(
      <ParkingSpace
        key={i}
        id={i}
        availableParkings={availableParkings}
        setAvailableParkings={setAvailableParkings}
        carsParked={carsParked}
        setCarsParked={setCarsParked}
      />
    );
  }

  const handleSubmitRegistration = () => {
    setRegModal(false);
    let currentSpace = Math.floor(Math.random() * numberOfParkings) + 1;
    while (availableParkings.indexOf(currentSpace) === -1) {
      currentSpace = Math.floor(Math.random() * numberOfParkings) + 1;
    }
    setAvailableParkings((prevSpaces) =>
      prevSpaces.filter((space: number) => space !== currentSpace)
    );
    setCarsParked((prevCars) => [
      ...prevCars,
      { id: currentSpace, time: currentTime, registration: regDetails },
    ]);
  };

  const addNewCarClick = () => {
    if (availableParkings.length > 0) {
      setRegModal(true);
      setCurrentTime("");
      setRegDetails("");
    } else {
      setToast(true);
    }
  };

  const handleToastClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setToast(false);
  };

  return (
    <div>
      <div className="parkingHeader">
        <Button
          variant="contained"
          color="success"
          className="newCarButton"
          onClick={addNewCarClick}
          sx={{ margin: "50px 0 50px 40px" }}
        >
          <Add />
          ADD NEW CAR
        </Button>
        <Paper
          elevation={10}
          sx={{
            margin: "20px 50px 10px 0",
            padding: "0 20px",
            color: "white",
            bgcolor: "gray",
          }}
        >
          <ul>
            <h4>Parking Charges</h4>
            <li>$10 for first 2 hours</li>
            <li>$10 for each subsequent hours</li>
          </ul>
        </Paper>
      </div>

      <div className="parking-container">{parkingBoxes}</div>

      <Registration
        regModal={regModal}
        setRegModal={setRegModal}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        regDetails={regDetails}
        setRegDetails={setRegDetails}
        handleSubmitRegistration={handleSubmitRegistration}
      />

      <Snackbar open={toast} autoHideDuration={3000} onClose={handleToastClose}>
        <Alert elevation={6} variant="filled" severity="error">
          NO PARKING SPACE AVAILABLE
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Parking;
