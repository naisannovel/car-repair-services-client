import React, { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import HorizontalLine from "../../utilities/HorizontalLine";
import { getAllService } from "../../../redux/actionCreators";
import { connect } from "react-redux";
import Spinner from '../../utilities/Spinner';

const mapDispatchToProps = dispatch =>{
  return {
    fetchService: ()=> dispatch(getAllService())
  }
}

const mapStateToProps = state => {
  return {
    loading: state.service.isLoading,
    service: state.service.services,
  }
}

const TakeAppointment = ({fetchService,loading,service}) => {
  useEffect(()=>fetchService(),[])
  const [selectedService,setSelectedService] = useState(null);

  const serviceList = service.map(item =>
      <option value={item._id}>{`${item.name} - $${item.price}`}</option>
    )

  let takeAppointmentPage = null;
  if(!loading){
    takeAppointmentPage = 
    <form onSubmit={(e)=>{
      console.log(selectedService);
      e.preventDefault();
    }}>
      <Label for="select">Take New Services</Label>
      <Input type="select" onChange={(e)=>setSelectedService(e.target.value)} style={{fontSize:'16px',marginBottom:'20px'}}>
        { serviceList }
      </Input>
    <button type='submit' className='primary-btn-small'>Submit</button>
  </form>
  }else{
    takeAppointmentPage = <Spinner/>
  }
  return (
    <div className='take__new__appointment__container'>
      <h1>Take New Appointment</h1>
      <HorizontalLine position='left' mTop='2rem' mBottom='4rem' />

      { takeAppointmentPage }
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(TakeAppointment);
