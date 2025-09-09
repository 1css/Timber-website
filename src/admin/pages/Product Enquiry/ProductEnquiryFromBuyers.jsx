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
import { Button } from "react-bootstrap";
import { tokens } from "../../theme";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SearchIcon from "@mui/icons-material/Search";

import * as XLSX from "xlsx";

const columns = [
  { id: "id", label: "ID", minWidth: 50 },
  { id: "EnquiryReqDate", label: "EnquiryReqDate", minWidth: 100 },
  { id: "ProductCatgeory", label: "Product Category", minWidth: 120 },
  { id: "ProductSubCategory", label: "ProductSubCategory", minWidth: 120 },
  { id: "ProductName", label: "ProductName", minWidth: 120, align: "center" },
  { id: "BuyerName", label: "Buyer's-Name", minWidth: 120, align: "center" },
  { id: "BuyerPhone", label: "Buyer's-Phone", minWidth: 120, align: "center" },
  { id: "BuyerEmail", label: "Buyer's-Email", minWidth: 120, align: "center" },
  {
    id: "BuyerAddress",
    label: "Buyer's-Address",
    minWidth: 120,
    align: "center",
  },
  { id: "BuyerMessage", label: "Buyer Message", minWidth: 200, align: "left" },
  {
    id: "EnquiryStatus",
    label: "EnquiryStatus",
    minWidth: 88,
    align: "center",
  },
  { id: "action", label: "Action", minWidth: 60, align: "right" },
];

const enquiryData = [
  {
    id: 1,
    EnquiryReqDate: "2024-11-01",
    ProductCategory: "Wood",
    ProductSubCategory: "Pine Wood",
    ProductName: "Pine Timber Planks",
    BuyerName: "Ravi Kumar",
    BuyerPhone: "+91 9876543210",
    BuyerEmail: "ravi.kumar@email.com",
    BuyerAddress: "Mumbai, Maharashtra",
    BuyerMessage: "Looking for bulk purchase.",
    EnquiryStatus: "Pending",
    ResponseDate: "",
    action: true, // action available
  },
  {
    id: 2,
    EnquiryReqDate: "2024-11-02",
    ProductCategory: "Wood",
    ProductSubCategory: "Oak Wood",
    ProductName: "Oak Timber Logs",
    BuyerName: "Priya Verma",
    BuyerPhone: "+91 9988776655",
    BuyerEmail: "priya.verma@email.com",
    BuyerAddress: "Delhi, India",
    BuyerMessage: "Need logs for construction.",
    EnquiryStatus: "Responded",
    ResponseDate: "2024-11-03",
    action: true, // action available
  },
  {
    id: 3,
    EnquiryReqDate: "2024-11-03",
    ProductCategory: "Wood",
    ProductSubCategory: "Teak Wood",
    ProductName: "Teak Wood Beams",
    BuyerName: "Anil Mehta",
    BuyerPhone: "+91 9123456789",
    BuyerEmail: "anil.mehta@email.com",
    BuyerAddress: "Kolkata, West Bengal",
    BuyerMessage: "Interested in bulk supply.",
    EnquiryStatus: "Closed",
    ResponseDate: "2024-11-04",
    action: true, // action available
  },
  {
    id: 4,
    EnquiryReqDate: "2024-11-04",
    ProductCategory: "Wood",
    ProductSubCategory: "Bamboo",
    ProductName: "Bamboo Poles",
    BuyerName: "Sanya Gupta",
    BuyerPhone: "+91 9345678901",
    BuyerEmail: "sanya.gupta@email.com",
    BuyerAddress: "Chennai, Tamil Nadu",
    BuyerMessage: "Looking for eco-friendly material.",
    EnquiryStatus: "Pending",
    ResponseDate: "",
    action: true, // action available
  },
  {
    id: 5,
    EnquiryReqDate: "2024-11-05",
    ProductCategory: "Wood",
    ProductSubCategory: "Rosewood",
    ProductName: "Rosewood Planks",
    BuyerName: "Vikram Singh",
    BuyerPhone: "+91 9812345678",
    BuyerEmail: "vikram.singh@email.com",
    BuyerAddress: "Hyderabad, Telangana",
    BuyerMessage: "Need planks for furniture making.",
    EnquiryStatus: "Responded",
    ResponseDate: "2024-11-06",
    action: true, // action available
  },
  {
    id: 6,
    EnquiryReqDate: "2024-11-06",
    ProductCategory: "Wood",
    ProductSubCategory: "Mango Wood",
    ProductName: "Mango Timber Logs",
    BuyerName: "Neha Sharma",
    BuyerPhone: "+91 9456781234",
    BuyerEmail: "neha.sharma@email.com",
    BuyerAddress: "Pune, Maharashtra",
    BuyerMessage: "Interested in small quantity.",
    EnquiryStatus: "Closed",
    ResponseDate: "2024-11-07",
    action: true, // action available
  },
  {
    id: 7,
    EnquiryReqDate: "2024-11-07",
    ProductCategory: "Wood",
    ProductSubCategory: "Sandalwood",
    ProductName: "Sandalwood Blocks",
    BuyerName: "Rahul Verma",
    BuyerPhone: "+91 9834567890",
    BuyerEmail: "rahul.verma@email.com",
    BuyerAddress: "Bengaluru, Karnataka",
    BuyerMessage: "Looking for specific dimensions.",
    EnquiryStatus: "Pending",
    ResponseDate: "",
    action: true, // action available
  },
  {
    id: 8,
    EnquiryReqDate: "2024-11-08",
    ProductCategory: "Wood",
    ProductSubCategory: "Cedar Wood",
    ProductName: "Cedar Timber Planks",
    BuyerName: "Simran Kaur",
    BuyerPhone: "+91 9901122334",
    BuyerEmail: "simran.kaur@email.com",
    BuyerAddress: "Jaipur, Rajasthan",
    BuyerMessage: "In need of treated cedar wood.",
    EnquiryStatus: "Responded",
    ResponseDate: "2024-11-09",
    action: true, // action available
  },
  {
    id: 9,
    EnquiryReqDate: "2024-11-09",
    ProductCategory: "Wood",
    ProductSubCategory: "Sal Wood",
    ProductName: "Sal Wood Logs",
    BuyerName: "Amit Yadav",
    BuyerPhone: "+91 9023344556",
    BuyerEmail: "amit.yadav@email.com",
    BuyerAddress: "Lucknow, Uttar Pradesh",
    BuyerMessage: "Looking for long logs.",
    EnquiryStatus: "Closed",
    ResponseDate: "2024-11-10",
    action: true, // action available
  },
  {
    id: 10,
    EnquiryReqDate: "2024-11-10",
    ProductCategory: "Wood",
    ProductSubCategory: "Mahogany",
    ProductName: "Mahogany Planks",
    BuyerName: "Alisha Patel",
    BuyerPhone: "+91 9911223344",
    BuyerEmail: "alisha.patel@email.com",
    BuyerAddress: "Surat, Gujarat",
    BuyerMessage: "Need planks for carpentry.",
    EnquiryStatus: "Pending",
    ResponseDate: "",
    action: true, // action available
  },
];

const rows = enquiryData.map((seller) => ({
  id: seller.id,
  EnquiryReqDate: seller.EnquiryReqDate,
  ProductCatgeory: seller.ProductCategory,
  ProductSubCategory: seller.ProductSubCategory,
  ProductName: seller.ProductName,
  BuyerName: seller.BuyerName,
  BuyerPhone: seller.BuyerPhone,
  BuyerEmail: seller.BuyerEmail,
  BuyerAddress: seller.BuyerAddress,
  BuyerMessage: seller.BuyerMessage,
  EnquiryStatus: seller.EnquiryStatus,
  action: true,
}));

export default function ProductEnquiryFromBuyers() {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangeConnect = (id) => {
    navigate("/admin/enquiryformedit");
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
        <h2>Buyer's Enquiry</h2>

        {/* <Box sx={{ padding: 2 }}>
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
                      "& .MuiInputBase-input": {
                        color: "black", // Text color
                        caretColor: "blue", // Caret (cursor) color
                      },
                    }}
                  /> 
                  <TextField
                    fullwidth
                    variant="outlined"
                    placeholder="search customers"
                    InputProps={{
                      startAdornment: (
                        <IconButton sx={{ color: "black" }}>
                          <SearchIcon sx={{ color: "black" }} />
                        </IconButton>
                      ),
                    }}
                    sx={{
                      "&. MuiOutlinedInput-root": {
                        "& filedset": {
                          borderColor: "black",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "black",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "black",
                      },
                      "& .MuiINputLabel-root.Mui-focused": {
                        color: "black",
                      },
                      "& .MuiINputBase-input": {
                        color: "black",
                        caretColor: "blue",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "blue",
                      height: "50px",
                      color: "white",
                    }}
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
        </Box> */}

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
