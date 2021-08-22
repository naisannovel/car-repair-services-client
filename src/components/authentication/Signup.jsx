import React from "react";
import HorizontalLine from "../utilities/HorizontalLine";
import { Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  return (
    <div className="container row login__container">
      <div className="col-md-6">
        <div className="login__input__container">
          <h1>Sign Up</h1>
          <HorizontalLine position="left" mTop="1.5rem" mBottom="3rem" />
          <Form>
            <FormGroup>
              <input type="text" name="name" id="name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <input
                type="email"
                className="mt-4"
                name="email"
                id="email"
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <input
                type="password"
                className="mt-4"
                name="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>
            <button className="primary-btn-small mt-5">SIGN UP</button>
          </Form>
          <p>
            have an account? <a href="#">Log In</a>
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <img src="assets/images/signup.svg" alt="login icon" />
      </div>
    </div>
  );
};

export default Signup;
