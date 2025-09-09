import React from "react";
import dayjs from "dayjs";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Container,
  Button,
  TextField,
  Typography,
  Stack,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import * as XLSX from "xlsx";
import { Grid, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import FileCopyIcon from "@mui/icons-material/FileCopy";
// import { DatePicker } from "@mui/material";

const columns = [
  { id: "slNo", label: "Sl. No.", minWidth: 50 },
  { id: "date", label: "Date", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 120 },
  { id: "phone", label: "Phone Number", minWidth: 120 },
  { id: "email", label: "Email", minWidth: 180 },
  { id: "message", label: "Message", minWidth: 200 },
];

const enquiryData = [
  {
    id: 1,
    date: "2024-11-01",
    name: "Ravi Kumar",
    phone: "+91 9876543210",
    email: "ravi.kumar@email.com",
    message: "Looking for bulk purchase.",
  },
  {
    id: 2,
    date: "2024-11-02",
    name: "Priya Verma",
    phone: "+91 9988776655",
    email: "priya.verma@email.com",
    message: "Need logs for construction.",
  },
  {
    id: 3,
    date: "2024-11-03",
    name: "Anil Mehta",
    phone: "+91 9123456789",
    email: "anil.mehta@email.com",
    message: "Interested in bulk supply.",
  },
  {
    id: 4,
    date: "2024-11-04",
    name: "Sanya Gupta",
    phone: "+91 9345678901",
    email: "sanya.gupta@email.com",
    message: "Looking for eco-friendly material.",
  },
  {
    id: 5,
    date: "2024-11-05",
    name: "Vikram Singh",
    phone: "+91 9812345678",
    email: "vikram.singh@email.com",
    message: "Need planks for furniture making.",
  },
  // Add more data as needed
];

const rows = enquiryData.map((entry, index) => ({
  slNo: index + 1,
  date: entry.date,
  name: entry.name,
  phone: entry.phone,
  email: entry.email,
  message: entry.message,
}));

const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Seller Data");
  XLSX.writeFile(workbook, "Seller_Data.xlsx");
};

export default function GetInTouch() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (id) => {
    // Logic for editing can be added here
    console.log("Editing entry with ID:", id);
  };

  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleExport = () => {
    console.log("Exporting to Excel...");
  };
  return (
    <div>
      <Container sx={{ marginTop: 2 }}>
        <h2 style={{ color: "black" }}>Get In Touch</h2>

        {/* <Box sx={{ padding: 2 }}>
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
                  sx={{
                    backgroundColor: "blue",
                    height: "50px",
                    color: "white",
                  }}
                  fullWidth
                  size="small"
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
                sx={{ backgroundColor: "blue", height: "50px" }}
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
                  Search2
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
                      align="left"
                      style={{
                        minWidth: column.minWidth,
                        fontSize: "18px",
                        backgroundColor: "#a9a9a9",
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
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.slNo}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align="left"
                            style={{ fontSize: "16px", color: "black" }}
                          >
                            {column.id === "slNo" ? value : value}
                            {column.id === "message" && value}
                            {column.id === "action" && (
                              <EditIcon
                                fontSize="small"
                                sx={{
                                  "&:hover": {
                                    color: "rgba(255, 0, 0, 0.5) !important",
                                  },
                                }}
                                onClick={() => handleEdit(row.id)}
                              />
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
            rowsPerPageOptions={[5, 10, 25]}
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
