import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import HorizontalLine from "../../utilities/HorizontalLine";

const TakeAppointment = () => {
  return (
    <div className='take__new__appointment__container'>
      <h1>Take New Appointment</h1>
      <HorizontalLine position='left' mTop='2rem' mBottom='4rem' />

      <Form>
        <FormGroup>
          <Label for="select">Take New Services</Label>
          <Input type="select" name="select" id='select' style={{fontSize:'16px',marginBottom:'20px'}}>
            <option>services</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <button className='primary-btn-small'>Submit</button>
      </Form>
    </div>
  );
};

export default TakeAppointment;
