import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const CompanyProfile = () => {
  const [companyDetails, setCompanyDetails] = useState({
    address1: "",
    address2: "",
    phone1: "",
    phone2: "",
    email1: "",
    email2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails({
      ...companyDetails,
      [name]: value,
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center" style={{ color: "black" }}>
        Company Profile
      </h2>
      <Form>
        <Row className="mb-4">
          <Col md={6}>
            <Form.Group controlId="address1">
              <Form.Label>Company Address 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                name="address1"
                value={companyDetails.address1}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="address2">
              <Form.Label>Company Address 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                name="address2"
                value={companyDetails.address2}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Group controlId="phone1">
              <Form.Label>Phone Number 1</Form.Label>
              <InputGroup>
                <InputGroup.Text>+91</InputGroup.Text>
                <FormControl
                  type="text"
                  placeholder="Enter Phone Number"
                  name="phone1"
                  value={companyDetails.phone1}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phone2">
              <Form.Label>Phone Number 2</Form.Label>
              <InputGroup>
                <InputGroup.Text>+91</InputGroup.Text>
                <FormControl
                  type="text"
                  placeholder="Enter Phone Number"
                  name="phone2"
                  value={companyDetails.phone2}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Group controlId="email1">
              <Form.Label>Email ID 1</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email1"
                value={companyDetails.email1}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email2">
              <Form.Label>Email ID 2</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email2"
                value={companyDetails.email2}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CompanyProfile;
