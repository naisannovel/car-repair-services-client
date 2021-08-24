import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const AddService = () => {
    return (
        <div className='add__service__container'>
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
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
      </FormGroup>
      <button className='primary-btn-small'>Submit</button>
    </Form>
        </div>
    );
};

export default AddService;