import React from "react";
import HorizontalLine from "../../utilities/HorizontalLine";
import { Form, FormGroup, Label, Input } from "reactstrap";

const GiveFeedback = () => {
  return (
    <div className="feedback__container">
      <h1>Give Us Feedback</h1>
      <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Profession</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="textarea">Feedback</Label>
          <Input type="textarea" name="textarea" id="Enter Your Feedback" />
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

export default GiveFeedback;
