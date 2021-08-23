import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const TakeAppointment = () => {
  return (
    <div>
      <h1>Take New Appointment</h1>

      <Form>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>services</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default TakeAppointment;
