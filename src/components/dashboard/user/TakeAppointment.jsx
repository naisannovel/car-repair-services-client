import React, { useEffect, useState } from "react";
import { Label, Input, Alert } from "reactstrap";
import HorizontalLine from "../../utilities/HorizontalLine";
import { getAllServiceWithoutImage } from "../../../redux/serviceActionCreators";
import { serviceIsCart } from '../../../redux/cartActionCreators';
import { connect } from "react-redux";
import SpinnerSecondary from '../../utilities/SpinnerSecondary';
import ServiceDetailsModal from "../../modal/ServiceDetailsModal";

const mapDispatchToProps = dispatch =>{
  return {
    fetchService: ()=> dispatch(getAllServiceWithoutImage()),
    isCart: (data,cb) => dispatch(serviceIsCart(data,cb))
  }
}

const mapStateToProps = state => {
  return {
    loading: state.service.isLoading,
    service: state.service.services,
    orderErrMsg: state.myService.errMsg,
  }
}

const TakeAppointment = ({fetchService,loading,service,isCart,orderErrMsg}) => {

  document.title = "Car Repair Service - Take New Service"

  useEffect(()=>fetchService(),[])

  const [data, setData] = useState(null);
  const [selectedService,setSelectedService] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const serviceList = service.map(item =>
      <option value={item._id}>{`${item.name} - $${item.price}`}</option>
    )

  let takeAppointmentPage = null;
  if(!loading){
    takeAppointmentPage = 
        <form onSubmit={(e)=>{
          isCart(selectedService,()=>{
            const selectedData = service.filter(item => item._id === selectedService)
            setData(selectedData[0]);
            setIsOpenModal(!isOpenModal)
          })
          e.preventDefault();
        }}>
              <Label for="select">Take New Services</Label>
              <Input type="select" onChange={(e)=>setSelectedService(e.target.value)} style={{fontSize:'16px',marginBottom:'20px'}}>
              <option>services</option>
                { serviceList }
              </Input>
            <button type='submit' className='primary-btn-small'>Submit</button>
      </form>
  }else{
    takeAppointmentPage = <SpinnerSecondary/>
  }
  
  return (
    <div className='take__new__appointment__container'>
      <h1>Take New Appointment</h1>
      <HorizontalLine position='left' mTop='2rem' mBottom='4rem' />
      { orderErrMsg !== null && <Alert color='danger' style={{fontSize:'16px'}}>{orderErrMsg}</Alert>}
      <ServiceDetailsModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} data={data} />
      { takeAppointmentPage }
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(TakeAppointment);
