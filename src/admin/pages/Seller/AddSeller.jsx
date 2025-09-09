import React, { useState } from "react";
import "./AddSeller.css";
import { Container } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  Paper,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";

function AddSellerForm() {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
    console.log("Editor Data: ", data);
  };
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategory2, setSelectedCategory2] = useState("");
  const [ProductName, setSetProductName] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value); // Update the selected category
  };
  const handleCategoryChange2 = (event) => {
    setSelectedCategory2(event.target.value); // Update the selected category
  };
  return (
    <Container>
      <h1 style={{ color: "black" }}>Add Buyers Form </h1>
      <div className="container">
        <form>
          <div className="row">
            <div className="col-25">
              <label for="fname"> Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Email </label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Phone NUmber </label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Alternative Phone NUmber </label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Alternative Phone Number"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="country">Buyer Type</label>
            </div>
            <div className="col-75">
              <select id="country" name="country">
                <option value="Buyer Type">Buyer Type</option>
                <option value="Buyer Type">Buyer Type</option>
                <option value="Buyer Type">Buyer Type</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">GST Number</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="GST Number"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Location</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Location"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">State</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="state"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">City</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="City"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="subject">Address</label>
            </div>
            <div class="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Address...."
                style={{ height: "100px" }}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Pincode</label>
            </div>
            <div class="col-75">
              <input
                type="Number"
                id="lname"
                name="lastname"
                placeholder="Pincode"
              />
            </div>
            <Paper
              elevation={1}
              sx={{ borderRadius: 2, padding: 2, backgroundColor: "white" }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: "black" }}>
                Basic Information
              </Typography>
              <Grid container spacing={2}>
                {/* Category Field */}
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      htmlFor="category-select"
                      sx={{ color: "black" }}
                    >
                      Category
                    </InputLabel>
                    <Select
                      label="Category"
                      input={
                        <OutlinedInput label="Category" id="category-select" />
                      }
                      value={selectedCategory} // Bind the value to the state
                      onChange={handleCategoryChange} // Handle change event
                      renderValue={(value) =>
                        value ? value : "Select Category"
                      }
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                        },
                        "& .MuiSelect-icon": {
                          color: "black",
                        },
                        "& .MuiOutlinedInput-input": {
                          color: "black", // Text color inside the input
                        },
                      }}
                    >
                      <MenuItem value="Category1">Category 1</MenuItem>
                      <MenuItem value="Category2">Category 2</MenuItem>
                      <MenuItem value="Category3">Category 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      htmlFor="subcategory-select"
                      sx={{ color: "black" }}
                    >
                      Sub-Category
                    </InputLabel>
                    <Select
                      label="Sub-Category"
                      input={
                        <OutlinedInput
                          label="Sub-Category"
                          id="subcategory-select"
                        />
                      }
                      value={selectedCategory2} // Bind the value to the state
                      onChange={handleCategoryChange2} // Handle change event
                      renderValue={(value) =>
                        value ? value : "Select Sub Category"
                      }
                      // sx={{ borderColor: "black", color: "black" }}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "black",
                        },
                        "& .MuiSelect-icon": {
                          color: "black",
                        },
                        "& .MuiOutlinedInput-input": {
                          color: "black",
                        },
                        "& .muiInputLabel-root": {
                          color: "black",
                        },
                        "& .Mui-focused .MuiInputLabel-root": {
                          color: "black",
                        },
                      }}
                    >
                      <MenuItem value="SubCategory1">Sub-Category 1</MenuItem>
                      <MenuItem value="SubCategory2">Sub-Category 2</MenuItem>
                      <MenuItem value="SubCategory3">Sub-Category 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={ProductName} // Bind value to the state
                    onChange={(e) => setSetProductName(e.target.value)} // Handle change event
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "black",
                      },
                      "& .MuiInputLabel-root": {
                        color: "black",
                      },
                      "& .Mui-focused .MuiInputLabel-root": {
                        color: "black",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
            <div style={{ margin: "20px" }}>
              <h2 style={{ color: "black" }}>Product Description</h2>
              <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={handleEditorChange}
                config={{
                  toolbar: [
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "link",
                    "bulletedList",
                    "numberedList",
                    "|",
                    "blockQuote",
                    "insertTable",
                    "undo",
                    "redo",
                  ],

                  contentCss: false, // Disable CKEditor default styles
                }}
              />
              {/* <div style={{ marginTop: "20px" }}>
                <h3 style={{ color: "black" }}>Preview:</h3>
                <div
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                    background: "#f9f9f9",
                    color: "#000", // Ensure preview text is black
                  }}
                  dangerouslySetInnerHTML={{ __html: editorData }}
                />
              </div> */}
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Container>
  );
}

export default AddSellerForm;
