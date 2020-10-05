import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell align="right">Email</TableCell>
      <TableCell align="right">Resume URL</TableCell>
      <TableCell align="right">Actions</TableCell>
    </TableRow>
  </TableHead>
);

export default TableHeader;
