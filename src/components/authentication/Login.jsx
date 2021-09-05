import React from "react";
import HorizontalLine from "../utilities/HorizontalLine";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";

const Login = () => {
  
  return (
    <div>
      <AuthHeader/>
      <div className="container row login__container">
        <div className="col-md-6">
          <img src="assets/images/login.svg" alt="login icon" />
        </div>
        <div className="col-md-6">
          <div className="login__input__container">
            <h1>Log In</h1>
            <HorizontalLine position="left" mTop="1.5rem" mBottom="3rem" />
            <Form>
              <FormGroup>
                <input
                  type="email"
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
              <button className="primary-btn-small mt-5">Log In</button>
            </Form>
            <p>
              Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p>or</p>
           <button className="primary-btn-big mt-5">
              {" "}
              <FontAwesomeIcon icon={faGoogle} />
              Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
