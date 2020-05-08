import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Rating from "@material-ui/lab/Rating";
import Avatar from "@material-ui/core/Avatar";

function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {
  const theme = useTheme();
  // const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className="pagination-footer">
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
      <style jsx>{`
        .pagination-footer {
          background: linear-gradient(
            0deg,
            rgba(34, 193, 195, 1) 0%
          ); /*linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);*/
          border-radius: 5px;
          border: 0;
          color: white;
          padding: 0 10px;
          flex-shrink: 0;
          margin-left: 40px;
        }

        .MuiTablePagination-caption {
          font-size: 15px;
          color: white;
        }
        .MuiIconButton-root,
        .MuiInputBase-input {
          color: white;
        }
      `}</style>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500
  }
});
const TableWithPagination = ({ rows }) => {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    // w-50 p-3 --> Le da un width: 75%
    <div className="container w-75 p-3">
      <TableContainer component={Paper} className="table-container">
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell align="right" className="table-cell">
                #
              </TableCell>
              <TableCell align="right" className="table-cell"></TableCell>
              <TableCell align="left" className="table-cell">
                NOMBRE
              </TableCell>
              <TableCell align="center" className="table-cell">
                PUNTAJE
              </TableCell>
              <TableCell align="center" className="table-cell">
                MATERIA
              </TableCell>
              <TableCell align="center" className="table-cell">
                NIVEL
              </TableCell>
              <TableCell align="center" className="table-cell">
                FECHA&nbsp;DE&nbsp;JUEGO
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow key={row.position}>
                <TableCell
                  align="right"
                  component="th"
                  scope="row"
                  className="column-position table-cell"
                >
                  {index + 4}
                </TableCell>
                <TableCell align="right" className="table-cell">
                  <Avatar alt="No Data" src={row.avatar}>
                    {row.name.charAt(0).toUpperCase()}
                  </Avatar>
                </TableCell>
                <TableCell align="left" className="column-name table-cell">
                  {row.name}
                </TableCell>
                <TableCell className="column-rating table-cell">
                  <Rating
                    align="left"
                    name="half-rating-read size-large"
                    defaultValue={row.score / 100}
                    precision={0.01}
                    readOnly
                  />
                  ({row.score})
                </TableCell>
                <TableCell align="center" className="table-cell">
                  {row.subject}
                </TableCell>
                <TableCell align="center" className="table-cell">
                  {row.level}
                </TableCell>
                <TableCell align="center" className="table-cell">
                  {row.date}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 50 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                labelRowsPerPage="Registros por Página"
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={6}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                className="pagination-info"
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <style jsx>{`
        .table-container {
          background: linear-gradient(
            0deg,
            rgba(34, 193, 195, 1) 0%,
            rgba(111, 66, 193, 1) 100%
          );
          border-radius: 5px;
          border: 0;
          color: white;
          padding: 0 10px;
          font-size: 15px;
        }

        .pagination-info {
          font-size: 2rem;
          padding-right: 6%;
        }

        .column-position {
          font-weight: bold;
        }
        .column-rating {
          font-weight: bold;
        }
        .column-name {
          font-size: 2rem;
          font-weight: bold;
        }
        .table-cell {
          background-color: linear-gradient(#e66465, #9198e5);
          color: white;
          font-size: 16px;
          font-weight: bold;
          // col-span: 6;
        }
        
      `}</style>
    </div>
  );
};

export default TableWithPagination;
