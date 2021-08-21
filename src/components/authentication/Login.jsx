import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Login = () => {
  return (
    <div className="container row login__container border border-danger">
      <div class="col-md-6 border border-danger">
        <img src="assets/images/login.jpg" alt="login icon" />
      </div>
      <div class="col-md-6 border border-danger">
        <div className="login__input__container">
          <h1>Log In</h1>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label check>
                <Input type="checkbox" /> Check me out
              </Label>
            </FormGroup>
            <button className='primary-btn-small'>Log In</button>
          </Form>
          <p>Don't have an account? Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
