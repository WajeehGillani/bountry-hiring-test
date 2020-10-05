import React, { useEffect, useState } from "react";
import axios from "axios";

// MUI Components
import {
  Fab,
  Container,
  Box,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";

// MUI Icons
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddIcon from "@material-ui/icons/Add";

// Components
import SnackAlert from "../../components/SnackAlert";
import TableHeader from "../../components/TableHeader";
import Form from "../../components/Form";

// MUI Styles
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 550,
  },
  deleteIcon: {
    cursor: "pointer",
  },
});

const DataTable = () => {
  const classes = useStyles();

  //States
  const [snackOpen, setSnackOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [data, setData] = useState([]);

  // useEffect
  useEffect(() => {
    axios
      .get(`https://5f7ab8e24ebc4100161cb035.mockapi.io/application`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error in request", err);
      });
  }, [data]);

  // Methods
  const handleDelete = (id) => {
    axios
      .delete(`https://5f7ab8e24ebc4100161cb035.mockapi.io/application/${id}`)
      .then((res) => {
        setData(data.filter((i) => i.id != res.data.id));
        setSnackOpen(true);
      })
      .catch((err) => {
        console.log("error in request", err);
      });
  };

  const handleSnackClose = () => {
    setSnackOpen(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Container maxWidth="md">
        <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
          <Fab color="primary" aria-label="add" onClick={handleOpenDialog}>
            <AddIcon />
          </Fab>
        </Box>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table
              stickyHeader
              className={classes.table}
              aria-label="simple table"
            >
              <TableHeader />
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.resumeUrl}</TableCell>
                    <TableCell align="right">
                      {" "}
                      <DeleteForeverIcon
                        className={classes.deleteIcon}
                        color="error"
                        fontSize="large"
                        onClick={() => handleDelete(row.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <SnackAlert
          message="Succeeded"
          severity="success"
          snackOpen={snackOpen}
          handleSnackClose={handleSnackClose}
        />
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add User</DialogTitle>
          <DialogContent>
            <Form setOpenDialog={setOpenDialog} setSnackOpen={setSnackOpen} />
          </DialogContent>
        </Dialog>
      </Container>
    </div>
  );
};

export default DataTable;
