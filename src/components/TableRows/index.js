import {
  TableRow as MUITableRow,
  TableCell,
  makeStyles,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
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

const TableRows = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      {data.map((row) => (
        <MUITableRow key={row.id}>
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
        </MUITableRow>
      ))}
    </>
  );
};

export default TableRows;
