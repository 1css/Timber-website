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
// import { tokens } from "../../theme";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";

import * as XLSX from "xlsx";

const columns = [
  { id: "SlNo", label: "Sl. No.", minWidth: 50 },
  { id: "Date", label: "Date", minWidth: 100 }, // Auto-filled Date
  {
    id: "Name",
    label: "Name",
    minWidth: 150,
    align: "center",
  },
  { id: "PhoneNumber", label: "Phone Number", minWidth: 120, align: "center" }, // Phone Number
  {
    id: "ProductDetails",
    label: "Product Details",
    minWidth: 120,
    align: "center",
  },
  { id: "Location", label: "Location", minWidth: 120, align: "center" },
];

const enquiryData = [
  {
    SlNo: 1,
    Date: "2024-11-01",
    Name: "Seller A",
    PhoneNumber: "9876543210",
    ProductDetails: "Product 1",
    Location: "Bengaluru",
  },
  {
    SlNo: 2,
    Date: "2024-11-02",
    Name: "Seller B",
    PhoneNumber: "9123456789",
    ProductDetails: "Product 2",
    Location: "Tumkur",
  },
  {
    SlNo: 3,
    Date: "2024-11-03",
    Name: "Seller C",
    PhoneNumber: "9876543211",
    ProductDetails: "Product 3",
    Location: "shivamogga",
  },
  {
    SlNo: 4,
    Date: "2024-11-04",
    Name: "Seller D",
    PhoneNumber: "9345678901",
    ProductDetails: "Product 4",
    Location: "Tumkur",
  },
  {
    SlNo: 5,
    Date: "2024-11-05",
    Name: "Seller E",
    PhoneNumber: "9555667788",
    ProductDetails: "Product 5",
    Location: "Bengaluru",
  },
  {
    SlNo: 6,
    Date: "2024-11-06",
    Name: "Seller F",
    PhoneNumber: "9988776655",
    ProductDetails: "Product 6",
    Location: "shivamogga",
  },
  {
    SlNo: 7,
    Date: "2024-11-07",
    Name: "Seller G",
    PhoneNumber: "9192837465",
    ProductDetails: "Product 7",
    Location: "Bengaluru",
  },
  {
    SlNo: 8,
    Date: "2024-11-08",
    Name: "Seller H",
    PhoneNumber: "9482736451",
    ProductDetails: "Product 8",
    Location: "Tumkur",
  },
  {
    SlNo: 9,
    Date: "2024-11-09",
    Name: "Seller I",
    PhoneNumber: "9334521023",
    ProductDetails: "Product 9",
    Location: "shivamogga",
  },
  {
    SlNo: 10,
    Date: "2024-11-10",
    Name: "Seller J",
    PhoneNumber: "9273641580",
    ProductDetails: "Product 10",
    Location: "Bengaluru",
  },
];

const rows = enquiryData.map((seller, index) => ({
  SlNo: index + 1,
  Date: seller.Date || "N/A",
  Name: seller.Name || "Not Provided",
  PhoneNumber: seller.PhoneNumber || "Not Provided",
  ProductDetails: seller.ProductDetails || "Not Provided",
  Location: seller.Location || "Not Provided",
}));

export default function BuyerList() {
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

  const handleChangeConnect = (id) => {
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
    <div>
      <Container>
        <h2 style={{ color: "black" }}>Buyerlist</h2>
        <Box display="flex" justifyContent="flex-end">
          <Button
            sx={{ backgroundColor: "blue", color: "white" }}
            onClick={() => navigate("admin/v1/addbuyerform")}
          >
            Add Buyer
          </Button>
        </Box>

        <Box sx={{ padding: 2 }}>
          <Grid container spacing={2} alignItems="center">
            {/* Search Field and Button */}
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
                  // sx={{
                  //   backgroundColor: "blue",
                  //   height: "50px",
                  //   color: "white",
                  // }}
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

            {/* Start Date Field */}
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

            {/* End Date Field */}
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

            {/* Export to Excel Button */}
            <Grid item xs={12} sm={4} md={2}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "blue",
                  height: "50px",
                  color: "white",
                }}
                startIcon={<FileCopyIcon />}
                fullWidth
              >
                Export to Excel
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontSize: "18px",
                        backgroundColor: "#a9a9a9",
                        border: "none", // Remove border globally
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: "white" }}>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              fontSize: "16px",
                              border: "none", // Remove border globally for table body

                              color: "black",
                            }}
                          >
                            {column.id === "action" ? (
                              <EditIcon
                                fontSize="small"
                                sx={{
                                  "&:hover": {
                                    color: "rgba(255, 0, 0, 0.5) !important",
                                  },
                                }}
                                onClick={() => handleChangeConnect(value)}
                              />
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
          {/* <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              ".MuiTablePagination-displayedRows": {
                marginTop: "1em",
                marginBottom: "1em",
              },
              ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel":
                {
                  marginTop: "1em",
                  marginBottom: "1em",
                  fontSize: "18px",
                },
              ".MuiSvgIcon-root": {
                fontSize: "27px",
              },
            }}
          /> */}
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
