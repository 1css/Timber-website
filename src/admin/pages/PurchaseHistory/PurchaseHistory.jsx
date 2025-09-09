import React from "react";
import dayjs from "dayjs";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableHead,
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
  { id: "SellerName", label: "Seller Name", minWidth: 100 },
  { id: "Category", label: "Category", minWidth: 150, align: "center" },
  { id: "SubCategory", label: "Subcategory", minWidth: 150, align: "center" },
  { id: "ProductName", label: "Name", minWidth: 150, align: "center" },
  { id: "Value", label: "Value", minWidth: 100, align: "center" },
  { id: "Weight", label: "Weight", minWidth: 100, align: "center" },
  { id: "Price", label: "Price", minWidth: 100, align: "center" },
  { id: "Date", label: "Date", minWidth: 150, align: "center" },
  { id: "Status", label: "Status", minWidth: 120, align: "center" },
];

const enquiryData = [
  {
    SlNo: 1,
    SellerName: "John Doe",
    Category: "Furniture",
    SubCategory: "Tables",
    ProductName: "Wooden Dining Table",
    Value: "Oak",
    Weight: "30kg",
    Price: "₹25",
    Date: "2024-11-20",
    Status: "Pending",
  },
  {
    SlNo: 2,
    SellerName: "Jane Smith",
    Category: "Electronics",
    SubCategory: "Mobile Phones",
    ProductName: "iPhone 14",
    Value: "128GB",
    Weight: "0.5kg",
    Price: "₹25",
    Date: "2024-11-20",
    Status: "Confirmed",
  },
  {
    SlNo: 3,
    SellerName: "Michael Brown",
    Category: "Clothing",
    SubCategory: "Men's Wear",
    ProductName: "Leather Jacket",
    Value: "Brown",
    Weight: "1kg",
    Price: "$120",
    Date: "2024-11-15",
    Status: "Pending",
  },
  {
    SlNo: 4,
    SellerName: "Alice Johnson",
    Category: "Home Appliances",
    SubCategory: "Refrigerators",
    ProductName: "Samsung Fridge",
    Value: "Double Door",
    Weight: "70kg",
    Price: "$650",
    Date: "2024-11-12",
    Status: "Confirmed",
  },
  {
    SlNo: 5,
    SellerName: "David Williams",
    Category: "Furniture",
    SubCategory: "Sofas",
    ProductName: "L-Shaped Sofa",
    Value: "Grey Fabric",
    Weight: "45kg",
    Price: "$350",
    Date: "2024-11-10",
    Status: "Pending",
  },
  {
    SlNo: 6,
    SellerName: "Emma Taylor",
    Category: "Electronics",
    SubCategory: "Laptops",
    ProductName: "MacBook Air",
    Value: "256GB SSD",
    Weight: "1.2kg",
    Price: "$1200",
    Date: "2024-11-05",
    Status: "Confirmed",
  },
  {
    SlNo: 7,
    SellerName: "Chris Lee",
    Category: "Clothing",
    SubCategory: "Footwear",
    ProductName: "Nike Running Shoes",
    Value: "Black",
    Weight: "0.7kg",
    Price: "$75",
    Date: "2024-11-01",
    Status: "Pending",
  },
  {
    SlNo: 8,
    SellerName: "Sophia Moore",
    Category: "Home Appliances",
    SubCategory: "Washing Machines",
    ProductName: "LG Washer",
    Value: "Front Load",
    Weight: "60kg",
    Price: "$550",
    Date: "2024-10-28",
    Status: "Confirmed",
  },
  {
    SlNo: 9,
    SellerName: "James Harris",
    Category: "Toys",
    SubCategory: "Action Figures",
    ProductName: "Spider-Man Toy",
    Value: "Plastic",
    Weight: "0.2kg",
    Price: "₹300",
    Date: "2024-10-25",
    Status: "Pending",
  },
  {
    SlNo: 10,
    SellerName: "Olivia Martin",
    Category: "Sports",
    SubCategory: "Fitness Equipment",
    ProductName: "Yoga Mat",
    Value: "Purple",
    Weight: "0.6kg",
    Price: "$20",
    Date: "2024-10-22",
    Status: "Confirmed",
  },
];

const rows = enquiryData.map((seller) => ({
  SlNo: seller.SlNo,
  SellerName: seller.SellerName || "Not Provided",
  Category: seller.Category || "Not Provided",
  SubCategory: seller.SubCategory || "Not Provided",
  ProductName: seller.ProductName || "Not Provided",
  Value: seller.Value || "Not Provided",
  Weight: seller.Weight || "Not Provided",
  Price: seller.Price || "Not Provided",
  Date: seller.Date || "N/A",
  Status: seller.Status || "Unknown",
}));

export default function PurchaseHistory() {
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
        <h2 style={{ color: "black" }}>Purchase History List</h2>
        {/* <Box display="flex" justifyContent="flex-end">
          <Button
            sx={{ backgroundColor: "blue", color: "white" }}
            onClick={() => navigate("/addproductobjectform")}
          >
            Add Product
          </Button>
        </Box> */}

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
                                  sx={{ color: "Green", marginRight: "5px" }}
                                  onClick={() => handleEdit(row.SellerID)}
                                >
                                  <EditIcon
                                    onClick={() =>
                                      navigate("/admin/purchasehistoryperview")
                                    }
                                  />
                                </IconButton>
                                {/* <IconButton
                                  sx={{ color: "red" }}
                                  onClick={() => handleDelete(row.SellerID)}
                                >
                                  <DeleteIcon />
                                </IconButton> */}
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
            // sx={{
            //   backgroundColor: "white",

            //   borderBottom: "1px solid black",
            //   borderTop: "1px solid black",
            //   ".MuiTablePagination-displayedRows, .MuiTablePagination-selectLabel":
            //     {
            //       marginTop: "1em",
            //       marginBottom: "1em",
            //       fontSize: "16px",
            //       color: "black",
            //     },
            //   ".MuiSelect-icon": {
            //     color: "black",
            //   },
            //   ".MuiSvgIcon-root": {
            //     color: "black",
            //   },
            //   ".MuiTablePagination-actions": {
            //     color: "black",
            //   },
            // }}
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
                color: "blue", // This will change the rowsPerPage numbers to red
              },
            }}
          />
        </Paper>
      </Container>
    </div>
  );
}
