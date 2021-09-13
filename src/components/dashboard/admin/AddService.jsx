import React from "react";
import { Form, FormGroup, Label } from "reactstrap";
import HorizontalLine from "../../utilities/HorizontalLine";
import { useForm } from "react-hook-form";
import { createNewService } from '../../../redux/actionCreators';
import { connect } from "react-redux";

const mapDispatchToProps = dispatch =>{
  return {
    addNewService: (data) => dispatch(createNewService(data))
  }
}
const mapStateToProps = state =>{
  console.log(state);
}
const AddService = ({addNewService}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    addNewService(data)
    reset();
  };
  return (
    <div className="add__service__container">
      <h1>Add Services</h1>
      <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="name">Service Name</Label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span className='form-error-style'>service name is required</span>}
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <input type="price" {...register("price", { required: true })} />
          {errors.price && <span className='form-error-style'>price is required</span>}
        </FormGroup>
        <FormGroup>
          <Label for="description">About Service</Label>
          <textarea type="textarea" {...register("about", { required: true })} />
          {errors.about && <span className='form-error-style'>about is required</span>}
        </FormGroup>
        <FormGroup>
          <Label for="file" style={{ display: "block" }}>
            File
          </Label>
          <input type="file" name='image' enctype="multipart/form-data" {...register("image", { required: true })} />
          {errors.image && <span className='form-error-style' style={{display:'block'}}>image is required</span>}
        </FormGroup>
        <button className="primary-btn-small">Submit</button>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(AddService);