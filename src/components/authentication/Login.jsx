import React from "react";
import HorizontalLine from "../utilities/HorizontalLine";
import { Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import SignupAndLoginNavbar from "./SignupAndLoginNavbar";
import { useForm } from 'react-hook-form';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div>
      <SignupAndLoginNavbar/>
      <div className="container row login__container">
        <div className="col-md-6">
          <img src="assets/images/login.svg" alt="login icon" />
        </div>
        <div className="col-md-6">
          <div className="login__input__container">
            <h1>Log In</h1>
            <HorizontalLine position="left" mTop="1.5rem" mBottom="3rem" />
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true, pattern:/\S+@\S+\.\S+/,minLength:5,maxLength:255 })}
                />
                {errors.email && <span className='form-error-style'>required</span>}
              </FormGroup>
              <FormGroup>
                <input
                  type="password"
                  className="mt-4"
                  placeholder="Password"
                  {...register("password", { required: true,minLength:5,maxLength:255 })}
                />
                {errors.password && <span className='form-error-style'>required</span>}
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
