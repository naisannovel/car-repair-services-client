import React, { useEffect, useState } from 'react';
import HorizontalLine from '../../utilities/HorizontalLine';
import { Table } from 'reactstrap';
import axios from 'axios';
import { API } from '../../../redux/baseURL';
import { isAuthenticated, userInfo } from '../../auth/authUtilities';
import SpinnerSecondary from '../../utilities/SpinnerSecondary';

const MyAppointment = () => {

  document.title = "Car Repair Service - My Appointment"

  const [loading,setLoading] = useState(false);
  const [serviceData,setServiceData] = useState([]);

  useEffect(()=>{
    const { token } = isAuthenticated() ? userInfo() : "";
    setLoading(true)
    axios.get(`${API}/cart`,{
      headers: {
          "Authorization": `Bearer ${token}`
      }})
      .then(response =>{
        console.log(response.data);
        setLoading(false)
        setServiceData(response.data)
      })
  },[]);

    const tableData = serviceData?.map((item,index)=>
    
      <tr style={{height:'50px',lineHeight:'50px'}} key={item.service._id}>
        <th scope="row" style={{width:'5%'}}> { index+1 } </th>
        <td style={{width:'50%'}}> { item.service.name } </td>
        <td style={{width:'15%'}}>{ item.service.price }</td>
        <td style={{width:'15%'}}>paid </td>
        <td style={{width:'15%'}}>{ item.status }</td>
      </tr>);

    let myAppointmentPage = null;
    if(!loading){
      myAppointmentPage = 
        serviceData?.length ?
        (<Table striped>
        <thead style={{textAlign: 'center'}}>
          <tr>
            <th>#</th>
            <th>Service</th>
            <th>Amount</th>
            <th>Condition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{textAlign: 'center'}}>
            { tableData }
        </tbody>
    </Table>) : <h1 style={{marginTop:'100px', textAlign: 'center', fontSize: '40px', fontWeight: '900', color: '#808080'}}>No Data Available</h1>
    }else{
      myAppointmentPage = <SpinnerSecondary/>
    }

    return (
        <div className='myappointment__container'>
            <div style={{textAlign: 'center'}}>
              <h1>My Appointment</h1>
              <HorizontalLine position="center" mTop="2rem" mBottom="3rem" />
            </div>
            { myAppointmentPage }
            
        </div>
    );
};

export default MyAppointment;