import React from "react";
import dayjs from "dayjs";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Box,
  useTheme,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "react-bootstrap";
import { tokens } from "../../theme";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import * as XLSX from "xlsx";

const columns = [
  { id: "SlNo", label: "Sl. No.", minWidth: 50 },
  { id: "SellerID", label: "Seller ID", minWidth: 100 },
  { id: "Name", label: "Name", minWidth: 150, align: "center" },
  {
    id: "ContactDetails",
    label: "Contact Details",
    minWidth: 150,
    align: "center",
  },
  { id: "Date", label: "Date", minWidth: 100 },
  { id: "Status", label: "Status", minWidth: 100, align: "center" },
];

const enquiryData = [
  {
    SlNo: 1,
    SellerID: "S101",
    Name: "Seller A",
    ContactDetails: "9876543210",
    Date: "2024-11-01",
    Status: "Available",
  },
  {
    SlNo: 2,
    SellerID: "S102",
    Name: "Seller B",
    ContactDetails: "9123456789",
    Date: "2024-11-02",
    Status: "Not Available",
  },
  {
    SlNo: 3,
    SellerID: "S103",
    Name: "Seller C",
    ContactDetails: "9345678901",
    Date: "2024-11-03",
    Status: "Available",
  },
  {
    SlNo: 4,
    SellerID: "S104",
    Name: "Seller D",
    ContactDetails: "9456781234",
    Date: "2024-11-04",
    Status: "Not Available",
  },
  {
    SlNo: 5,
    SellerID: "S105",
    Name: "Seller E",
    ContactDetails: "9567892345",
    Date: "2024-11-05",
    Status: "Available",
  },
  {
    SlNo: 6,
    SellerID: "S106",
    Name: "Seller F",
    ContactDetails: "9678903456",
    Date: "2024-11-06",
    Status: "Not Available",
  },
  {
    SlNo: 7,
    SellerID: "S107",
    Name: "Seller G",
    ContactDetails: "9789014567",
    Date: "2024-11-07",
    Status: "Available",
  },
  {
    SlNo: 8,
    SellerID: "S108",
    Name: "Seller H",
    ContactDetails: "9890125678",
    Date: "2024-11-08",
    Status: "Not Available",
  },
  {
    SlNo: 9,
    SellerID: "S109",
    Name: "Seller I",
    ContactDetails: "9901236789",
    Date: "2024-11-09",
    Status: "Available",
  },
  {
    SlNo: 10,
    SellerID: "S110",
    Name: "Seller J",
    ContactDetails: "9012347890",
    Date: "2024-11-10",
    Status: "Not Available",
  },
];

const rows = enquiryData.map((seller) => ({
  SlNo: seller.SlNo,
  SellerID: seller.SellerID,
  Name: seller.Name || "Not Provided",
  ContactDetails: seller.ContactDetails || "Not Provided",
  Date: seller.Date || "N/A",
  Status: seller.Status || "Unknown",
}));

export default function SellerList() {
  const theme = useTheme();
  const navigate = useNavigate();
  //   const colors = tokens(theme.palette.mode);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (id) => {
    // navigate("/productdetails");
    console.log(id);
  };
  const handleDelete = (id) => {
    // navigate("/productdetails");
    console.log(id);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Seller Data");
    XLSX.writeFile(workbook, "Seller_Data.xlsx");
  };

  return (
    <div style={{ marginBottom: "3px" }}>
      <Container>
        <h2 style={{ color: "black" }}>Seller List</h2>
        <Box display="flex" justifyContent="flex-end">
          <Button
            sx={{ backgroundColor: "blue", color: "white" }}
            onClick={() => navigate("/admin/adminproductpurchase")}
          >
            Add Sellers
          </Button>
        </Box>

        <Box sx={{ padding: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search customers"
                  InputProps={{
                    startAdornment: (
                      <IconButton sx={{ color: "black" }}>
                        <SearchIcon sx={{ color: "black" }} />
                      </IconButton>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "black",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "black",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "blue",
                    height: "50px",
                    color: "white",
                  }}
                  fullWidth
                >
                  Search
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <TextField
                fullWidth
                variant="outlined"
                type="date"
                label="Start Date"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "black",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black",
                  },
                  "& .MuiInputBase-input": {
                    color: "black",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <TextField
                fullWidth
                variant="outlined"
                type="date"
                label="End Date"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "black",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black",
                  },
                  "& .MuiInputBase-input": {
                    color: "black",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={4} md={2}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "blue",
                  height: "50px",
                  color: "white",
                  width: "100%",
                }}
                startIcon={<FileCopyIcon />}
                fullWidth
              >
                Export to Excel
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="seller table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontSize: "18px",
                        backgroundColor: "#f5f5f5",
                        color: "#000",
                        fontWeight: "bold",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: "#fff" }}>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.SellerID}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              fontSize: "16px",
                              color: "#333",
                              borderBottom: "1px solid #eee",
                            }}
                          >
                            {column.id === "Status" ? (
                              <Box display="flex" alignItems="center">
                                <IconButton
                                  sx={{ color: "blue", marginRight: "5px" }}
                                  onClick={() => handleEdit(row.SellerID)}
                                >
                                  <EditIcon
                                    onClick={() =>
                                      navigate("/admin/sellerformeditproduct")
                                    }
                                  />
                                </IconButton>
                                <IconButton
                                  sx={{ color: "red" }}
                                  onClick={() => handleDelete(row.SellerID)}
                                >
                                  <DeleteIcon />
                                </IconButton>
                                <span
                                  style={{
                                    padding: "4px 8px",
                                    borderRadius: "4px",
                                    backgroundColor:
                                      value === "Available"
                                        ? "#d4edda"
                                        : "#f8d7da",
                                    color:
                                      value === "Available"
                                        ? "#155724"
                                        : "#721c24",
                                    marginRight: "10px",
                                  }}
                                >
                                  {value}
                                </span>
                              </Box>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              backgroundColor: "#fff",
              color: "#fff",
              borderBottom: "1px solid black",
              borderTop: "1px solid black",
              ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel":
                {
                  marginTop: "1em",
                  marginBottom: "1em",
                  fontSize: "16px",
                  color: "black",
                },
              ".MuiSelect-icon": {
                color: "black",
              },
              ".MuiSvgIcon-root": {
                color: "black",
              },
              ".MuiTablePagination-actions": {
                color: "black",
              },
              ".MuiTablePagination-select": {
                color: "blue",
              },
            }}
          />
        </Paper>
      </Container>
    </div>
  );
}
