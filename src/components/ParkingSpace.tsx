import { useEffect, useState } from "react";
import { CarDetails, ParkingSpaceProps } from "../types";
import Exit from "./Exit";
import ExitTime from "./ExitTime";
import { Paper, Button } from "@mui/material";

const ParkingSpace = ({
  id,
  availableParkings,
  setAvailableParkings,
  carsParked,
  setCarsParked,
}: ParkingSpaceProps) => {
  const [bgTheme, setBgTheme] = useState<string>("");
  const [exitBtnDisabled, setExitBtnDisabled] = useState<boolean>(true);
  const [exitModal, setExitModal] = useState<boolean>(false);
  const [exitTime, setExitTime] = useState<string>("");
  const [exitTimeModal, setExitTimeModal] = useState<boolean>(false);
  const [currentStartTime, setCurrentStartTime] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (availableParkings.indexOf(id) >= 0) {
      setBgTheme("#518959");
    } else {
      setBgTheme("#F41434");
      setExitBtnDisabled(false);
    }
  }, [availableParkings, id]);

  // exit 1
  const handleCarExit = () => {
    setExitTimeModal(true);
    carsParked.map((car: CarDetails) => {
      if (car.id === id) {
        setCurrentStartTime(car.time);
      }
      return null;
    });
  };

  // exit 2
  const handleExitTime = () => {
    setExitTimeModal(false);
    setExitModal(true);
  };

  // exit 3
  const handleConfirmExit = () => {
    setAvailableParkings((prevSpaces) => [...prevSpaces, id]);
    setCarsParked((prevCars: Array<CarDetails>) =>
      prevCars.filter((car: CarDetails) => car.id !== id)
    );
    setExitBtnDisabled(true);
    setExitModal(false);

    // post request
    const currentReg = carsParked.filter((car: CarDetails) => car.id === id);
    const myValues = {
      "car-registration": currentReg[0].registration,
      charge: totalPrice,
    };
    console.log(myValues);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myValues),
    };
    fetch("https://httpstat.us/200", options)
      .then((response) => {
        console.log("Response ==", response);
        return response.json();
      })
      .then((response) => {
        console.log("Response.JSON ==", response);
      })
      .catch((error) => {
        console.log("Error ==", error);
      });
  };

  return (
    <>
      <Paper
        className="eachParking"
        id={
          exitBtnDisabled
            ? `parking-drawing-space-${id}`
            : `parking-drawing-registered-${id}`
        }
        sx={{ backgroundColor: bgTheme }}
        elevation={10}
      >
        <Paper
          sx={{ padding: "5px 20px", color: "gray", bgcolor: "black" }}
          elevation={10}
          id={`parking-drawing-space-number-${id}`}
        >
          {id}
        </Paper>
        <Button
          id="deregister-car-registration"
          variant="contained"
          color="error"
          className="exitButton"
          onClick={handleCarExit}
          sx={{ display: exitBtnDisabled ? "none" : "inline-block" }}
        >
          EXIT
        </Button>
      </Paper>

      <Exit
        startTime={currentStartTime}
        exitTime={exitTime}
        exitModal={exitModal}
        setExitModal={setExitModal}
        handleConfirmExit={handleConfirmExit}
        setTotalPrice={setTotalPrice}
      />

      <ExitTime
        exitTime={exitTime}
        setExitTime={setExitTime}
        exitTimeModal={exitTimeModal}
        setExitTimeModal={setExitTimeModal}
        handleExitTime={handleExitTime}
      />
    </>
  );
};

export default ParkingSpace;
