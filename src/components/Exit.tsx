import { Box, Button, Typography, Modal } from "@mui/material";
import { KeyboardDoubleArrowLeft, DoubleArrow } from "@mui/icons-material";
import { ExitProps } from "../types";
import { useEffect } from "react";

const ModalStyle = {
  display: "flex",
  flexDirection: "column",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background:
    "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
  bgcolor: "rgb(18, 18, 18)",
  border: "1px solid #FFF",
  boxShadow: 24,
  p: 4,
  height: 250,
  color: "white",
  justifyContent: "space-around",
  borderRadius: "10px",
};

const Exit = ({
  startTime,
  exitTime,
  exitModal,
  setExitModal,
  handleConfirmExit,
  setTotalPrice,
}: ExitProps) => {
  var date1 = new Date(startTime);
  var date2 = new Date(exitTime);

  var diff = Math.abs(date2.getTime() - date1.getTime());
  var diffHours = Math.ceil(diff / (1000 * 3600));

  var totalPrice = 0;
  if (diffHours <= 2) {
    totalPrice = 10;
  } else if (diffHours > 2) {
    totalPrice = 10 + (diffHours - 2) * 10;
  }

  useEffect(() => {
    setTotalPrice(totalPrice);
  }, [totalPrice, setTotalPrice]);

  return (
    <Modal
      open={exitModal}
      onClose={() => setExitModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={ModalStyle}>
        <div>
          <Typography variant="body1" component="h5">
            Time Spent in Parking Space:
          </Typography>
          <Typography variant="h6" sx={{ color: "red" }} component="h6">
            {diffHours} Hour(s)
          </Typography>
        </div>
        <div>
          <Typography id="modal-modal-title" variant="body1" component="h5">
            Your Current Parking Charges are:
          </Typography>
          <Typography
            id="deregister-charge"
            variant="h6"
            component="h6"
            sx={{ color: "green" }}
          >
            ${totalPrice}
          </Typography>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Button
            id="deregister-back-butto"
            type="button"
            color="secondary"
            variant="contained"
            startIcon={<KeyboardDoubleArrowLeft />}
            onClick={() => setExitModal(false)}
          >
            Go Back
          </Button>
          <Button
            id="deregister-payment-button"
            type="submit"
            variant="contained"
            endIcon={<DoubleArrow />}
            onClick={handleConfirmExit}
          >
            Confirm Payment and Exit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Exit;
