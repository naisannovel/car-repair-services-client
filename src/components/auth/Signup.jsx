import React from "react";
import HorizontalLine from "../utilities/HorizontalLine";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { auth } from '../../redux/authActionCreators';
import { Alert } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../auth/authUtilities';
import { Redirect } from "react-router";
import Spinner from '../utilities/Spinner';


const mapDispatchToProps = dispatch =>{
  return {
    authSignup: (data,mode,cb)=> dispatch(auth(data,mode,cb))
  }
}

const mapStateToProps = state =>{
  return {
    authFailedMsg: state.auth.errMsg,
    loadingSpinner: state.auth.isLoading
  }
}

const Signup = ({authSignup,loadingSpinner,authFailedMsg}) => {

  document.title = "Car Repair Service - SignUp"

  const history = useHistory()
  const location = useLocation()

  let { from } = location.state || { from: { pathname: '/' } };

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    authSignup(data,'signup',()=>history.replace(from));
    reset()
  };

  const redirectUser = () => {
    if (isAuthenticated()) return <Redirect to="/" />
  }

  let signupPage = null;

  if(!loadingSpinner){
    signupPage = 
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
              {errors.password && <span className='form-error-style'>required - minimum 5 characters</span>}
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
  }else{
    signupPage = <Spinner/>
  }

  return (
    <div>
      {redirectUser()}
      { signupPage }
      
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(Signup);
