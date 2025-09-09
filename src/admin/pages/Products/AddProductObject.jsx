import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function AddProductObjectForm() {
  const [editorData, setEditorData] = useState();
  // const [file, setFile] = useState("/assets/wood3.jpg");
  const [files, setFiles] = useState(Array(5).fill("/assets/wood3.jpg"));

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };

  const handleChange = (index) => (e) => {
    const updatedFiles = [...files];
    updatedFiles[index] = URL.createObjectURL(e.target.files[0]);
    setFiles(updatedFiles);
  };

  const imageStyle = {
    width: "100%", // Full width for responsiveness
    height: "130px", // Fixed height
    objectFit: "cover", // Maintain aspect ratio and fit the container
    marginTop: "10px", // Add spacing between input and image
  };

  return (
    <div className="container">
      <h2 style={{ color: "black" }}>Add a New Product </h2>
      <Form>
        {/* <Row className="mb-3">
          <Form.Group as={Col} controlId="">
            <Form.Label>Seller Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Seller name"
              style={{ height: "40px" }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="seller Id">
            <Form.Label>Seller Id</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Number"
              style={{ height: "40px" }}
            />
          </Form.Group>
        </Row> */}

        {/* <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group> */}

        {/* <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row> */}

        {/* pod */}
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={4} controlId="formGridCity">
            <Form.Label>Product Name</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
            <Form.Label>Category</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
            <Form.Label>Sub-Category</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={4} controlId="formGridCity">
            <Form.Label>Weigth</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} xs={12} md={4} controlId="formGridState">
            <Form.Label>Units</Form.Label>
            <Form.Select
              xs={5}
              md={4}
              defaultValue="Choose..."
              className="w-100"
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} xs={12} md={4} controlId="">
            <Form.Label>Minimum Stock(alert msg)</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        {/*  */}

        <Row className="mb-3">
          <Form.Group as={Col} xl={3} controlId="">
            <Form.Label>Tree measure (if have)</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} xl={3} controlId="formGridCity">
            <Form.Label>Date</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        {/* <div>
          <h2 style={{ color: "black" }}>Add Product Images</h2>
          <Row>
            {files.map((file, index) => (
              <Col key={index} lg={4} md={4} sm={12}>
                <h4 style={{ color: "black" }}>Add image {index + 1}:</h4>
                <input type="file" onChange={handleChange(index)} />
                <img src={file} alt="Not found" style={imageStyle} />
              </Col>
            ))}
          </Row>
        </div> */}

        <div>
          <h2 style={{ color: "black" }}>Add Product Images</h2>
          <Form>
            <Row>
              {files.map((file, index) => (
                <Col key={index} lg={4} md={4} sm={12}>
                  <h4 style={{ color: "black" }}>add images {index + 1}:</h4>
                  <Form.Group>
                    <Form.Control
                      type="file"
                      onChange={handleChange(index)}
                      name={`image${index + 1}`}
                    ></Form.Control>
                    <img src={file} alt="not fond" style={imageStyle} />
                  </Form.Group>
                </Col>
              ))}
            </Row>
          </Form>
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Descirption</Form.Label>
          <CKEditor
            editor={ClassicEditor}
            data={editorData}
            onChange={handleEditorChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddProductObjectForm;
