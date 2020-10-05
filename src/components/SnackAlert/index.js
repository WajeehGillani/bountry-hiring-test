import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const SnackAlert = ({ message, severity, snackOpen, handleSnackClose }) => (
  <Snackbar
    open={snackOpen}
    anchorOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    autoHideDuration={5000}
    onClose={handleSnackClose}
  >
    <Alert
      elevation={6}
      variant="filled"
      onClose={handleSnackClose}
      severity={severity}
    >
      {message}
    </Alert>
  </Snackbar>
);

export default SnackAlert;
