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
import DeleteIcon from "@mui/icons-material/Delete";

import * as XLSX from "xlsx";

const columns = [
  { id: "SlNo", label: "Sl. No.", minWidth: 50 },
  { id: "ProductID", label: "ProductID", minWidth: 100 },
  { id: "Category", label: "Category", minWidth: 150, align: "center" },
  {
    id: "SubCategory",
    label: "SubCategory",
    minWidth: 150,
    align: "center",
  },
  {
    id: "Stock",
    label: "Stock",
    minWidth: 80,
    align: "center",
  },
  { id: "ProductAddedDate", label: "ProductAddedDate", minWidth: 100 },
  { id: "Status", label: "Status", minWidth: 100, align: "center" },
];

const enquiryData = [
  {
    SlNo: 1,
    ProductID: "S101",
    Category: "Wood",
    SubCategory: "Teak",
    ProductAddedDate: "2024-11-01",
    Stock: 5,
    Status: "Block",
  },
  {
    SlNo: 2,
    ProductID: "S102",
    Category: "plants",
    SubCategory: "Rose",

    ProductAddedDate: "2024-11-02",
    Stock: 5,
    Status: "UnBlock",
  },
  {
    SlNo: 3,
    ProductID: "S103",
    Category: "seeds",
    SubCategory: "sunflower",
    ProductAddedDate: "2024-11-03",
    Stock: 5,
    Status: "UnBLock",
  },
  {
    SlNo: 4,
    ProductID: "S104",
    Category: "wood",
    SubCategory: "Teak",
    ProductAddedDate: "2024-11-04",
    Stock: 5,
    Status: "Block",
  },
  {
    SlNo: 5,
    ProductID: "S105",
    Category: "Plants",
    SubCategory: "Rose",
    ProductAddedDate: "2024-11-05",
    Stock: 5,
    Status: "UnBlock",
  },
  {
    SlNo: 6,
    ProductID: "S106",
    Category: "seeds",
    SubCategory: "Sunflower",
    ProductAddedDate: "2024-11-06",
    Stock: 5,
    Status: "Block",
  },
  {
    SlNo: 7,
    ProductID: "S107",
    Category: "wood",
    SubCategory: "Teak",
    ProductAddedDate: "2024-11-07",
    Stock: 5,
    Status: "UnBlock",
  },
  {
    SlNo: 8,
    ProductID: "S108",
    Category: "Plants",
    SubCategory: "Rose",
    ProductAddedDate: "2024-11-08",
    Stock: 5,
    Status: "Block",
  },
  {
    SlNo: 9,
    ProductID: "S109",
    Category: "seeds",
    SubCategory: "sunflower",
    ProductAddedDate: "2024-11-09",
    Stock: 5,
    Status: "UnBlock",
  },
  {
    SlNo: 10,
    ProductID: "S110",
    Category: "woods",
    SubCategory: "Teak",
    ProductAddedDate: "2024-11-10",
    Stock: 5,
    Status: "Block",
  },
];

const rows = enquiryData.map((seller) => ({
  SlNo: seller.SlNo,
  ProductID: seller.ProductID,
  Category: seller.Category || "Not Provided",
  SubCategory: seller.SubCategory || "Not Provided",
  ProductAddedDate: seller.ProductAddedDate || "N/A",
  Stock: seller.Stock,
  Status: seller.Status || "Unknown",
}));

export default function ProductObjects() {
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
        <h2 style={{ color: "black" }}>Product List</h2>
        <Box display="flex" justifyContent="flex-end">
          <Button
            sx={{ backgroundColor: "blue", color: "white" }}
            onClick={() => navigate("/addproductobjectform")}
          >
            Add Product
          </Button>
        </Box>

        <Box sx={{ padding: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={6} lg={4}>
              {/* <Stack direction="row" spacing={1} alignItems="center">
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
              </Stack> */}
              <Stack direction="row" spacing={1}>
                <Grid item xs={12} sm={8} md={8} lg={8}>
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

                {/* Search Button */}
                <Grid item xs={12} sm={4} md={4} lg={3}>
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
                </Grid>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4} md={6} lg={3}>
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

            <Grid item xs={12} sm={4} md={6} lg={3}>
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

            <Grid item xs={12} sm={4} md={6} lg={2}>
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
                                      navigate("/admin/editproductform")
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
