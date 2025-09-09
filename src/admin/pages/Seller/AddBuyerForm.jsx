import React, { useState } from "react";
import "./AddBuyerForm.css";
import { Container } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function AddBuyerForm() {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
    console.log("Editor Data: ", data);
  };
  return (
    <Container>
      <h1 style={{ color: "black" }}>Add Buyers Form </h1>
      <div className="container">
        <form action="/action_page.php">
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
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Container>
  );
}

export default AddBuyerForm;
