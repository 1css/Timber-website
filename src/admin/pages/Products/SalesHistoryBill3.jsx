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
import { DownloadInvoice } from "./SalesHistoryBill2";

const order = {
  _id: "123456",
  address: {
    firstName: "John",
    lastName: "Doe",
    addressLine1: "123 Maple Street",
    addressLine2: "Apt 4B",
    city: "Springfield",
    state: "Illinois",
    zipCode: "62704",
  },
  paymentTerm: "Net 30",
  type: "Credit Card",
  price: 1500, // Total price
  orderDate: "2024-11-21T10:30:00.000Z",
  items: [
    {
      productName: "Wooden Table",
      variant: { size: "Medium", quantity: 2 },
      totalPrice: 1000,
    },
    {
      productName: "Wooden Chair",
      variant: { size: "Standard", quantity: 4 },
      totalPrice: 500,
    },
  ],
};

const columns = [
  { id: "SlNo", label: "Sl. No.", minWidth: 50 },
  { id: "ProductName", label: "Product Name", minWidth: 150, align: "center" },
  { id: "Variant", label: "Variant", minWidth: 150, align: "center" },
  { id: "Quantity", label: "Quantity", minWidth: 100, align: "center" },
  { id: "TotalPrice", label: "Total Price", minWidth: 120, align: "center" },
  { id: "FirstName", label: "First Name", minWidth: 100, align: "center" },
  { id: "LastName", label: "Last Name", minWidth: 100, align: "center" },
  { id: "Address", label: "Address", minWidth: 200, align: "center" },
  { id: "City", label: "City", minWidth: 100, align: "center" },
  { id: "State", label: "State", minWidth: 100, align: "center" },
  { id: "ZipCode", label: "Zip Code", minWidth: 100, align: "center" },
  { id: "PaymentTerm", label: "Payment Term", minWidth: 100, align: "center" },
  { id: "Type", label: "Payment Type", minWidth: 100, align: "center" },
  { id: "OrderDate", label: "Order Date", minWidth: 150, align: "center" },
  {
    id: "TotalOrderPrice",
    label: "Total Order Price",
    minWidth: 150,
    align: "center",
  },
  {
    id: "InvoicePrint",
    label: "Invoice Print",
    minWidth: 150,
    align: "center",
  },
];
const enquiryData = order.items.map((item, index) => ({
  SlNo: index + 1,
  ProductName: item.productName,
  Variant: `${item.variant.size}`,
  Quantity: item.variant.quantity,
  TotalPrice: item.totalPrice,
  FirstName: order.address.firstName,
  LastName: order.address.lastName,
  Address: `${order.address.addressLine1}, ${
    order.address.addressLine2 || ""
  }`.trim(),
  City: order.address.city,
  State: order.address.state,
  ZipCode: order.address.zipCode,
  PaymentTerm: order.paymentTerm,
  Type: order.type,
  OrderDate: new Date(order.orderDate).toLocaleDateString(),
  TotalOrderPrice: order.price,
}));

const rows = enquiryData.map((data) => ({
  SlNo: data.SlNo,
  ProductName: data.ProductName || "Not Provided",
  Variant: data.Variant || "Not Provided",
  Quantity: data.Quantity || 0,
  TotalPrice: data.TotalPrice || 0,
  FirstName: data.FirstName || "Not Provided",
  LastName: data.LastName || "Not Provided",
  Address: data.Address || "Not Provided",
  City: data.City || "Not Provided",
  State: data.State || "Not Provided",
  ZipCode: data.ZipCode || "Not Provided",
  PaymentTerm: data.PaymentTerm || "Not Provided",
  Type: data.Type || "Not Provided",
  OrderDate: data.OrderDate || "N/A",
  TotalOrderPrice: data.TotalOrderPrice || 0,
  ...data,
  InvoicePrint: data,
}));

export default function SalesHistroyBillThree() {
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

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Seller Data");
    XLSX.writeFile(workbook, "Seller_Data.xlsx");
  };

  const handlePrintInvoice = (selectedData) => {
    // Pass the specific row data to the DownloadInvoice function
    DownloadInvoice(selectedData);
  };

  return (
    <div style={{ marginBottom: "3px" }}>
      <Container>
        <h2 style={{ color: "black" }}>Purchase List</h2>

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
            <Table stickyHeader aria-label="purchase list">
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
              {/* <TableBody sx={{ backgroundColor: "#fff" }}>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
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
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody> */}
              <TableBody sx={{ backgroundColor: "#fff" }}>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
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
                            {column.id === "InvoicePrint" ? (
                              <button
                                style={{
                                  padding: "5px 10px",
                                  backgroundColor: "#22a1c3",
                                  color: "#fff",
                                  border: "none",
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handlePrintInvoice(row.InvoicePrint)
                                }
                              >
                                Print Invoice
                              </button>
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
