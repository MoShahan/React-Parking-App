import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { RegistrationProps } from "../types";
import { Send } from "@mui/icons-material";

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
  bgcolor: "rgb(50, 50, 50)",
  border: "1px solid #FFF",
  boxShadow: 24,
  p: 4,
  height: 350,
  color: "white",
  justifyContent: "space-around",
  borderRadius: "10px",
};

const Registration = ({
  regModal,
  setRegModal,
  currentTime,
  setCurrentTime,
  regDetails,
  setRegDetails,
  handleSubmitRegistration,
}: RegistrationProps) => {
  return (
    <Modal
      open={regModal}
      onClose={() => setRegModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={ModalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h3">
          Enter Car Registration Details:
        </Typography>
        <TextField
          autoFocus={true}
          sx={{ color: "white" }}
          required
          onChange={(e) => setRegDetails(e.target.value)}
          id="parking-drawing-registration-input"
          label="Type here..."
          variant="filled"
          value={regDetails}
        />

        <Typography id="modal-modal-title" variant="h6" component="h3">
          Enter Entering Time:
        </Typography>
        <TextField
          sx={{ color: "white" }}
          value={currentTime}
          required
          id="filled-required"
          variant="filled"
          type="datetime-local"
          onChange={(e) => setCurrentTime(e.target.value)}
        />

        <Button
          id="parking-drawing-add-car-button"
          sx={{ marginTop: "50px" }}
          type="submit"
          variant="contained"
          endIcon={<Send />}
          onClick={handleSubmitRegistration}
        >
          CONFIRM
        </Button>
      </Box>
    </Modal>
  );
};

export default Registration;
