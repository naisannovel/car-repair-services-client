import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import HorizontalLine from "../../utilities/HorizontalLine";

const MakeAdmin = () => {
  return (
    <div className="make__admin__container">
      <h1>Make New Admin</h1>
      <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
          />
        </FormGroup>
        <button className="primary-btn-small">Submit</button>
      </Form>
    </div>
  );
};

export default MakeAdmin;
