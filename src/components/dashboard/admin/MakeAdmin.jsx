import React, { useState } from "react";
import { Alert, Form, FormGroup, Label } from "reactstrap";
import HorizontalLine from "../../utilities/HorizontalLine";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API } from '../../../redux/baseURL';
import { isAuthenticated,userInfo } from '../../auth/authUtilities';
import SpinnerSecondary from "../../utilities/SpinnerSecondary";

const { token } = isAuthenticated() ? userInfo() : "";

const MakeAdmin = () => {

  document.title = "Car Repair Service - Make Admin"

  const [resSuccessMsg,setResSuccessMsg] = useState(null);
  const [resErrMsg,setResErrMsg] = useState(null);

  const [loading,setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {
    reset()
    setLoading(true)
    axios.put(`${API}/user/update/role`,data,{
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    })
    .then(response => {
      setLoading(false)
      setResSuccessMsg(response.data)
      setTimeout(()=>setResSuccessMsg(null),2000)
    })
    .catch(err => {
      setLoading(false);
      setResErrMsg(err.response.data);
      setTimeout(()=>setResErrMsg(null),2000)
    })
  };

  let makeAdminPage = null;

  if(!loading){
    makeAdminPage = 
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
  }else{
    makeAdminPage = <SpinnerSecondary/>
  }
  
  return (
    <div className="make__admin__container">
       { resSuccessMsg !== null && <Alert color='success' style={{fontSize:'16px'}}>{resSuccessMsg}</Alert>}
       { resErrMsg !== null && <Alert color='danger' style={{fontSize:'16px'}}>{resErrMsg}</Alert>}
      <div style={{ textAlign: 'center' }}>
        <h1>Make New Admin</h1>
        <HorizontalLine position="center" mTop="2rem" mBottom="3rem" />
      </div>
      { makeAdminPage }
    </div>
  );
};

export default MakeAdmin;
