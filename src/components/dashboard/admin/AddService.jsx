import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import HorizontalLine from "../../utilities/HorizontalLine";

const AddService = () => {
  return (
    <div className="add__service__container">
      <h1>Add Services</h1>
      <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
      <Form>
        <FormGroup>
          <Label for="name">Service Name</Label>
          <Input type="text" name="name" id="name" />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="price" name="price" id="price" />
        </FormGroup>
        <FormGroup>
          <Label for="description">About Service</Label>
          <Input type="textarea" name="description" id="description" />
        </FormGroup>
        <FormGroup>
          <Label for="file" style={{ display: "block" }}>
            File
          </Label>
          <Input type="file" name="file" id="file" />
        </FormGroup>
        <button className="primary-btn-small">Submit</button>
      </Form>
    </div>
  );
};

export default AddService;