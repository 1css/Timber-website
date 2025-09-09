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

import * as XLSX from "xlsx";

const columns = [
  { id: "SlNo", label: "Sl. No.", minWidth: 50 },
  { id: "Date", label: "Date", minWidth: 100 }, // Auto-filled Date
  {
    id: "Name",
    label: "Name",
    minWidth: 150,
    align: "center",
  }, // Seller Details with form
  { id: "PhoneNumber", label: "Phone Number", minWidth: 120, align: "center" }, // Phone Number
  {
    id: "ProductDetails",
    label: "Product Details",
    minWidth: 120,
    align: "center",
  }, // Product Details (if provided)
  { id: "GSTDetails", label: "GST Details", minWidth: 120, align: "center" }, // GST Details (if provided)
];

const enquiryData = [
  {
    SlNo: 1,
    Date: "2024-11-01",
    Name: "Seller A",
    PhoneNumber: "9876543210",
    ProductDetails: "Product 1",
    GSTDetails: "GST12345",
  },
  {
    SlNo: 2,
    Date: "2024-11-02",
    Name: "Seller B",
    PhoneNumber: "9123456789",
    ProductDetails: "Product 2",
    GSTDetails: "GST23456",
  },
  {
    SlNo: 3,
    Date: "2024-11-03",
    Name: "Seller C",
    PhoneNumber: "9876543211",
    ProductDetails: "Product 3",
    GSTDetails: "GST34567",
  },
  {
    SlNo: 4,
    Date: "2024-11-04",
    Name: "Seller D",
    PhoneNumber: "9345678901",
    ProductDetails: "Product 4",
    GSTDetails: "GST45678",
  },
  {
    SlNo: 5,
    Date: "2024-11-05",
    Name: "Seller E",
    PhoneNumber: "9555667788",
    ProductDetails: "Product 5",
    GSTDetails: "GST56789",
  },
  {
    SlNo: 6,
    Date: "2024-11-06",
    Name: "Seller F",
    PhoneNumber: "9988776655",
    ProductDetails: "Product 6",
    GSTDetails: "GST67890",
  },
  {
    SlNo: 7,
    Date: "2024-11-07",
    Name: "Seller G",
    PhoneNumber: "9192837465",
    ProductDetails: "Product 7",
    GSTDetails: "GST78901",
  },
  {
    SlNo: 8,
    Date: "2024-11-08",
    Name: "Seller H",
    PhoneNumber: "9482736451",
    ProductDetails: "Product 8",
    GSTDetails: "GST89012",
  },
  {
    SlNo: 9,
    Date: "2024-11-09",
    Name: "Seller I",
    PhoneNumber: "9334521023",
    ProductDetails: "Product 9",
    GSTDetails: "GST90123",
  },
  {
    SlNo: 10,
    Date: "2024-11-10",
    Name: "Seller J",
    PhoneNumber: "9273641580",
    ProductDetails: "Product 10",
    GSTDetails: "GST01234",
  },
];

const rows = enquiryData.map((seller, index) => ({
  SlNo: index + 1, // Sequential Sl. No. (1-based index)
  Date: seller.Date || "N/A", // Auto-filled Date (use EnquiryReqDate or fallback to "N/A")
  Name: seller.Name || "Not Provided", // Assuming ProductName can represent Seller details
  PhoneNumber: seller.PhoneNumber || "Not Provided", // Using Buyer's phone as the phone number
  ProductDetails: seller.ProductDetails || "Not Provided", // Using ProductName for product details
  GSTDetails: seller.GSTDetails || "Not Provided", // Assuming GSTDetails is a property of `seller`, otherwise fallback to "Not Provided"
}));

export default function SellerRequest() {
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
        <h2 style={{ color: "black" }}>SellerRequest</h2>

        {/* <Box
          display="flex"
          justifyContent="space-between"
          marginBottom="10px"
          flexWrap="wrap"
          sx={{
            flexDirection: {
              xs: "column", // Stacks one below the other for extra small screens
              sm: "column", // Stacks one below the other for small screens
              md: "column", // Stacks one below the other for medium screens
              lg: "row", // Stacks in a row for large and larger screens (above 1366px)
            },
            alignItems: {
              xs: "stretch", // Stretch elements for small screens
              sm: "stretch", // Stretch elements for small screens
              md: "stretch", // Stretch elements for medium screens
              lg: "center", // Center elements for large screens and up
            },
          }}
        >
          <Box
            sx={{ width: { xs: "100%", sm: "100%", md: "100%", lg: "48%" } }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="Uncontrolled picker"
                  defaultValue={dayjs("2022-04-17")}
                  sx={{ width: "100%" }}
                />
                <DatePicker
                  label="Controlled picker"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  sx={{ width: "100%" }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>

          <Button
            onClick={exportToExcel}
            sx={{
              width: { xs: "90%", sm: "90%", md: "90%", lg: "70%" },
              marginTop: { md: 3, xs: 3, sm: 3 },
            }}
            className="search-button-style"
          >
            Export as Excel
          </Button>

          <Stack
            spacing={1}
            direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
            width={{ xs: "100%", sm: "100%", md: "100%", lg: "auto" }}
            alignItems="flex-start"
            sx={{
              marginTop: { xs: 2, sm: 2, md: 2, lg: 0 },
            }}
          >
            <TextField
              id="outlined-required"
              label="Search"
              sx={{
                width: { xs: "100%", sm: "100%", md: "100%", lg: "auto" },
                marginTop: { xs: 2, sm: 2, md: 2, lg: 0 },
              }}
            />
            <Button
              variant="contained"
              className="search-button-style"
              sx={{
                width: { xs: "100%", sm: "100%", md: "100%", lg: "auto" },
                marginTop: { xs: 2, sm: 2, md: 2, lg: 0 },
              }}
            >
              Search
            </Button>
          </Stack>
        </Box> */}
        <Box sx={{ padding: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={9}>
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
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "blue", height: "50px" }}
                    className="Button-class"
                    fullWidth
                    startIcon={<SearchIcon />}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
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
                      borderColor: "black", // Set the border color to black
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "black", // Set the label color to black
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black", // Set the label color to black when focused
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
                style={{ backgroundColor: "blue", height: "50px" }}
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
