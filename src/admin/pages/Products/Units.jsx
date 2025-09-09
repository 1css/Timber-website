import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Container, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import * as XLSX from "xlsx";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import AddUnitsModel from "../Models/AddUnitsModel";

// Define columns with the unit column
const columns = [
  { id: "serial", label: "Serial No.", minWidth: 50 },
  { id: "unit", label: "Unit", minWidth: 100 }, // Only keep the unit column
  { id: "action", label: "Action", minWidth: 130, align: "center" },
];

// Define rows with unit and isActive field
const rows = [
  { id: 1, unit: "kg", isActive: true },
  { id: 2, unit: "g", isActive: true },
  { id: 3, unit: "ton", isActive: true },
  { id: 4, unit: "lb", isActive: true },
  { id: 5, unit: "m³", isActive: true },
  { id: 6, unit: "ft³", isActive: true },
  { id: 7, unit: "m", isActive: true },
  { id: 8, unit: "ft", isActive: true },
  { id: 9, unit: "cm", isActive: true },
  { id: 10, unit: "in", isActive: true },
  { id: 11, unit: "board feet", isActive: true },
  { id: 12, unit: "pieces", isActive: true },
  { id: 13, unit: "m²", isActive: true },
  { id: 14, unit: "ft²", isActive: true },
  { id: 15, unit: "lineal foot", isActive: true },
  { id: 16, unit: "lineal meter", isActive: true },
  { id: 17, unit: "bundle", isActive: true },
  { id: 18, unit: "load", isActive: true },
  { id: 19, unit: "pcs", isActive: true },
  { id: 20, unit: "sq.m", isActive: true },
  { id: 21, unit: "cbm", isActive: true },
  { id: 22, unit: "yard", isActive: true },
  { id: 23, unit: "cord", isActive: true },
  { id: 24, unit: "kiloton", isActive: true },
  { id: 25, unit: "metric ton", isActive: true },
  { id: 26, unit: "gallon", isActive: true },
];

const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete?");
  if (confirmDelete) {
    console.log(`Delete item with id: ${id}`);
  }
};

const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");
  XLSX.writeFile(workbook, "units.xlsx");
};

export default function Units() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [timberRows, setTimberRows] = React.useState(rows);
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleAddCategory = (newCategory) => {
    setTimberRows((prevRows) => [
      ...prevRows,
      { id: prevRows.length + 1, ...newCategory },
    ]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const toggleStatus = (id) => {
    setTimberRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, isActive: !row.isActive } : row
      )
    );
  };

  return (
    <div>
      <Container>
        <Box display="flex" justifyContent="space-between" marginBottom="10px">
          <h2>Timber Units</h2> {/* Changed to "Timber Units" */}
          <Box display="flex" gap="10px">
            <Button
              onClick={exportToExcel}
              style={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              Export as Excel
            </Button>
            <Button
              onClick={handleOpenModal}
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              Add units
            </Button>
          </Box>
        </Box>

        <AddUnitsModel
          open={isModalOpen}
          handleClose={handleCloseModal}
          handleAddCategory={handleAddCategory}
        />
        <Box marginBottom="10px" flexWrap="wrap">
          <Stack
            spacing={1}
            direction={{ xs: "column", sm: "row" }}
            width={{ xs: "100%", sm: "auto" }}
            alignItems="flex-start"
            sx={{
              marginTop: { xs: 2, sm: 2, md: 0, lg: 0 }, // Apply marginTop for xs as well
            }}
          >
            <TextField
              id="outlined-required"
              label="Search"
              sx={{
                width: { xs: "100%", sm: "auto" },
                marginTop: { xs: 2, sm: 2 }, // Apply marginTop for xs as well
              }}
            />
            <Button
              variant="contained"
              className="search-button-style"
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              Search
            </Button>
          </Stack>
        </Box>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="timber unit table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontSize: "18px",
                        fontWeight: "bold",
                        backgroundColor: "#a9a9a9",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  overflowX: {
                    xs: "auto", // Horizontal scroll on mobile screens
                    sm: "hidden", // No scroll on larger screens
                  },
                }}
                style={{ backgroundColor: "white" }}
              >
                {timberRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell style={{ fontSize: "18px", color: "black" }}>
                        {index + 1 + page * rowsPerPage}
                      </TableCell>

                      {/* Display unit value */}
                      <TableCell style={{ fontSize: "18px", color: "black" }}>
                        {row.unit}
                      </TableCell>

                      <TableCell align="center">
                        <IconButton
                          color="primary"
                          onClick={() =>
                            console.log(`Edit item with id: ${row.id}`)
                          }
                          size="small"
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => handleDelete(row.id)}
                          size="small"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                        <Button
                          variant="contained"
                          color={row.isActive ? "success" : "warning"}
                          onClick={() => toggleStatus(row.id)}
                          sx={{
                            marginLeft: "8px",
                            padding: { xs: "2px 6px", sm: "6px 16px" },
                            fontSize: { xs: "10px", sm: "14px" },
                          }}
                        >
                          {row.isActive ? "Active" : "Inactive"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[8, 16, 50, 100]}
            component="div"
            count={timberRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel":
                {
                  marginTop: "1em",
                  marginBottom: "1em",
                  fontSize: "18px",
                },
              ".MuiSvgIcon-root": {
                fontSize: "27px",
                color: "#333",
              },
              backgroundColor: "#f0f0f0", // Background color
              color: "#333", // Text color
            }}
          />
        </Paper>
      </Container>
    </div>
  );
}
