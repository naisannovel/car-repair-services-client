import React from "react";
import HorizontalLine from "../../utilities/HorizontalLine";
import { FormGroup, Label, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import { createNewReview } from '../../../redux/reviewActionCreators';
import { connect } from "react-redux";
import { isAuthenticated,userInfo } from '../../authentication/authUtilities';
import Spinner from '../../utilities/Spinner';


const mapDispatchToProps = dispatch =>{
  return {
    addNewReview: (data) => dispatch(createNewReview(data))
  }
}
const mapStateToProps = state =>{
  return {
    loading: state.review.isLoading,
    successMsg: state.review.successMsg,
    errMsg: state.review.errMsg
  }
}

const GiveFeedback = ({addNewReview,loading,successMsg,errMsg}) => {
  const { name, _id } = isAuthenticated() ? userInfo() : "";
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    addNewReview(data);
    reset();
  };

  let giveFeedbackPage = null;
  if(!loading){
    giveFeedbackPage = <form onSubmit={handleSubmit(onSubmit)}>
    <FormGroup>
      <Label for="name">Name</Label>
      <input
        type="text"
        value={name}
        placeholder="Enter Your Name"
        {...register("name", { required: true })}
        readOnly
      />
    </FormGroup>
    <FormGroup>
      <Label for="Profession">Profession</Label>
      <input
        type="text"
        {...register("profession", { required: true })}
        placeholder="Enter Your profession"
      />
      {errors.profession && <span className='form-error-style'>required</span>}
    </FormGroup>
    <FormGroup>
      <Label for="textarea">Feedback</Label>
      <textarea type="textarea" {...register("feedback", { required: true })} placeholder="About us..." />
      {errors.feedback && <span className='form-error-style'>required</span>}
    </FormGroup>
      <Label for="file" style={{ display: "block" }}>
        Image
      </Label>
      <input type="file" name='image' {...register("image", { required: true })} />
      {errors.image && <span className='form-error-style'>required</span>}
    <button className="primary-btn-small">Submit</button>
  </form>
  }else{
    giveFeedbackPage = <Spinner/>
  }
  return (
    <div className="feedback__container">
        { errMsg !== null && <Alert color='danger' style={{fontSize:'16px'}}>{errMsg}</Alert>}
      { successMsg !== null && <Alert color='success' style={{fontSize:'16px'}}>{successMsg}</Alert>}
      <h1>Give Us Feedback</h1>
      <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
      { giveFeedbackPage }
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(GiveFeedback);
