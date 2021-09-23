import React, { useEffect } from "react";
import HorizontalLine from "../utilities/HorizontalLine";
import { Form, FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import SignupAndLoginNavbar from "./SignupAndLoginNavbar";
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { auth } from '../../redux/authActionCreators';
import { connect } from 'react-redux';
import { isAuthenticated } from '../authentication/authUtilities';
import { Redirect } from "react-router";
import { Alert } from 'reactstrap';
import { API } from '../../redux/baseURL';
import Spinner from '../utilities/Spinner';

const mapDispatchToProps = dispatch =>{
  return {
    authLogin: (data,mode,cb)=> dispatch(auth(data,mode,cb))
  }
}

const mapStateToProps = state =>{
  return {
    authFailedMsg: state.auth.errMsg,
    loadingSpinner: state.auth.isLoading
  }
}

const Login = ({ authLogin, authFailedMsg, loadingSpinner }) => {

  document.title = "Car Repair Service - Login"

  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: '/' } };

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => authLogin(data,'login',()=>history.replace(from));

  const redirectUser = () => {
    if (isAuthenticated()) return <Redirect to="/" />
}

  let loginPage = null;

  if(!loadingSpinner){
    loginPage= <div className="container row login__container">
    <div className="col-md-6 order-1">
      <img src="assets/images/login.svg" alt="login icon" />
    </div>
    <div className="col-md-6">
      <div className="login__input__container">
      { authFailedMsg !== null && <Alert color='danger' style={{fontSize:'16px'}}>{authFailedMsg}</Alert>}
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
            {errors.password && <span className='form-error-style'>required - minimum 5 characters</span>}
          </FormGroup>
          <button className="primary-btn-small mt-5">Log In</button>
        </Form>
        <p>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
        {/* <p>or</p>
       <button className="primary-btn-big mt-5" onClick={()=>window.open(`${API}/auth/google`, "_self")}>
          <FontAwesomeIcon icon={faGoogle} />
          Sign in with google
        </button> */}
      </div>
    </div>
  </div>
  }else{
    loginPage = <Spinner/>
  }

  return (
    <div>
      {redirectUser()}
      <SignupAndLoginNavbar/>
      { loginPage }
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);
