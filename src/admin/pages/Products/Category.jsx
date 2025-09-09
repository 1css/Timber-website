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

import AddCategoryModal from "../Models/AddCategoryModal ";

const columns = [
  { id: "serial", label: "Serial No.", minWidth: 50 },

  { id: "category", label: "Category (3)", minWidth: 100 },
  { id: "action", label: "Action", minWidth: 130, align: "center" },
];

const rows = [
  {
    id: 1,
    category: "Teak",

    isActive: true,
  },
  {
    id: 2,
    category: "Rosewood",

    isActive: false,
  },
  {
    id: 3,
    category: "Bamboo",

    isActive: true,
  },
  {
    id: 4,
    category: "Sandalwood",

    isActive: false,
  },
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
  XLSX.writeFile(workbook, "Category.xlsx");
};

export default function Category() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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
          <h2>Timber Categories</h2>
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
              Add Category
            </Button>
          </Box>
        </Box>

        <AddCategoryModal
          open={isModalOpen}
          handleClose={handleCloseModal}
          handleAddCategory={handleAddCategory}
        />
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="timber category table">
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
                      sx={{
                        display: {
                          xs:
                            column.id === "categoryImage"
                              ? "none"
                              : "table-cell",
                          sm: "table-cell",
                        },
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {/* <TableBody style={{ backgroundColor: "white" }}>
                {timberRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell style={{ fontSize: "18px", color: "black" }}>
                        {index + 1 + page * rowsPerPage}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ display: { xs: "none", sm: "table-cell" } }}
                      >
                        <img
                          src={row.categoryImage}
                          alt={row.category}
                          width="50"
                          height="50"
                        />
                      </TableCell>
                      <TableCell style={{ fontSize: "18px", color: "black" }}>
                        {row.category}
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
              </TableBody> */}
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

                      <TableCell style={{ fontSize: "18px", color: "black" }}>
                        {row.category}
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
            rowsPerPageOptions={[10, 25, 100]}
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
