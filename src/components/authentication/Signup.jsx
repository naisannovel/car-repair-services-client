import React, { useState } from "react";
import HorizontalLine from "../utilities/HorizontalLine";
import { Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import SignupAndLoginNavbar from "./SignupAndLoginNavbar";
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { auth } from '../../redux/authActionCreators';
import { Alert } from 'reactstrap';


const mapDispatchToProps = dispatch =>{
  return {
    auth: (data,mode)=> dispatch(auth(data,mode))
  }
}

const mapStateToProps = state =>{
  console.log(state);
  return {
    authFailedMsg: state.auth.errMsg,
    loadingSpinner: state.auth.isLoading,
    userData: state.auth.userData
  }
}

const Signup = ({auth,loadingSpinner,userData,authFailedMsg}) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => auth(data,'signup');

  return (
    <div>
      <SignupAndLoginNavbar/>

      <div className="container row signup__container">
      <div className="col-md-6">
        
        <div className="signup__input__container">
        { authFailedMsg !== null && <Alert color='danger' style={{fontSize:'16px'}}>{authFailedMsg}</Alert>}
          <h1>Sign Up</h1>
          <HorizontalLine position="left" mTop="1.5rem" mBottom="3rem" />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <input type="text" {...register("name", { required: true, minLength:2,maxLength:255})} placeholder="Name" />
              {errors.name && <span className='form-error-style'>required</span>}
            </FormGroup>
            <FormGroup>
              <input
                type="email"
                className="mt-4"
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
            <button className="primary-btn-small mt-5">SIGN UP</button>
          </Form>
          <p>
            have an account? <Link to='/login'>Log In</Link>
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <img src="assets/images/signup.svg" alt="signup icon" />
      </div>
    </div>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(Signup);
