import React from "react";
import { Form, FormGroup, Label } from "reactstrap";
import HorizontalLine from "../../utilities/HorizontalLine";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    reset()
  };
  return (
    <div className="make__admin__container">
      <h1>Make New Admin</h1>
      <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="email">Email</Label>
          <input
            type="email"
            {...register("email", { required: true, pattern:/\S+@\S+\.\S+/,minLength:5,maxLength:255 })}
            placeholder="Enter email address"
          />
          {errors.email && <span className='form-error-style'>email is required</span>}
        </FormGroup>
        <button className="primary-btn-small">Submit</button>
      </Form>
    </div>
  );
};

export default MakeAdmin;
