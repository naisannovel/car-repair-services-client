import React, { useEffect, useState } from 'react';
import HorizontalLine from '../../utilities/HorizontalLine';
import { Table } from 'reactstrap';
import axios from 'axios';
import { API } from '../../../redux/baseURL';
import { isAuthenticated, userInfo } from '../../authentication/authUtilities';
import Spinner from '../../utilities/Spinner';

const MyAppointment = () => {
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
        setLoading(false)
        setServiceData(response.data)
      })
  },[]);

    const tableData = serviceData.length ? serviceData.map((item,index)=>
      <tr style={{height:'50px',lineHeight:'50px'}} key={item.service._id}>
        <th scope="row" style={{width:'5%'}}>1</th>
        <td style={{width:'50%'}}> { item.service.name } </td>
        <td style={{width:'15%'}}>{ item.service.price }</td>
        <td style={{width:'15%'}}>paid </td>
        <td style={{width:'15%'}}>{ item.status }</td>
      </tr>
    ): <h1 style={{marginTop:'20px'}}>No Data Available</h1>

    let myAppointmentPage = null;
    if(!loading){
      myAppointmentPage = 
      <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Service</th>
          <th>Amount</th>
          <th>Condition</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
            { tableData }
      </tbody>
    </Table>
    }else{
      myAppointmentPage = <Spinner/>
    }

    return (
        <div className='myappointment__container'>
            <h1>My Appointment</h1>
            <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
            { myAppointmentPage }
            
        </div>
    );
};

export default MyAppointment;