import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table as TableBase,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableFooter,
} from "@material-ui/core";
import TablePaginationActions from "./TablePaginationActions";

const useStyles = makeStyles({
  table: {},
});

interface TableProps {
  tableData: any;
  tableHeaders?: [];
  className?: string;
}

const Table: React.FC<TableProps> = ({
  tableData,
  tableHeaders,
  className,
}) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} elevation={0} className={className}>
      <TableBase className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">First name</TableCell>
            <TableCell align="left">Last name</TableCell>
            <TableCell align="left">Department</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? tableData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : tableData
          ).map((data: any) => (
            <TableRow key={data.email}>
              <TableCell component="th" scope="row">
                {data.email}
              </TableCell>
              <TableCell align="left">{data.first_name}</TableCell>
              <TableCell align="left">{data.last_name}</TableCell>
              <TableCell align="left">{data.department}</TableCell>
              <TableCell align="left">{data.role}</TableCell>
              <TableCell align="left">{data.country}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </TableBase>
    </TableContainer>
  );
};

export default Table;
