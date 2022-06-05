import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import { DoubleArrow } from "@mui/icons-material";
import { ExitTimeProps } from "../types";

const ModalStyle = {
  display: "flex",
  flexDirection: "column",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "1px solid #FFF",
  boxShadow: 24,
  p: 4,
  color: "white",
  justifyContent: "space-around",
  borderRadius: "10px",
  background:
    "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
  bgcolor: "rgb(50, 50, 50)",
};

const ExitTime = ({
  exitTime,
  setExitTime,
  exitTimeModal,
  setExitTimeModal,
  handleExitTime,
}: ExitTimeProps) => {
  return (
    <Modal
      open={exitTimeModal}
      onClose={() => setExitTimeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={ModalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h3">
          Enter Exit Time:
        </Typography>

        <TextField
          sx={{ marginTop: "20px" }}
          value={exitTime}
          required
          id="deregister-time-spent"
          label=""
          variant="filled"
          type="datetime-local"
          onChange={(e) => setExitTime(e.target.value)}
        />

        <Button
          sx={{ marginTop: "30px" }}
          type="submit"
          variant="contained"
          endIcon={<DoubleArrow />}
          onClick={handleExitTime}
        >
          Proceed
        </Button>
      </Box>
    </Modal>
  );
};

export default ExitTime;
