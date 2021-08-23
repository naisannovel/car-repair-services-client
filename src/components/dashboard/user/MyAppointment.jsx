import React from 'react';
import HorizontalLine from '../../utilities/HorizontalLine';
import { Table } from 'reactstrap';

const MyAppointment = (props) => {
    return (
        <div className='myappointment__container'>
            <h1>My Appointment</h1>
            <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
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
        <tr style={{height:'50px',lineHeight:'50px'}}>
          <th scope="row" style={{width:'5%'}}>1</th>
          <td style={{width:'50%'}}> Lorem ipsum, dolor sit amet c ipsum, dolor sit amet c</td>
          <td style={{width:'15%'}}>$ 15.000</td>
          <td style={{width:'15%'}}>paid </td>
          <td style={{width:'15%'}}>ongoing </td>
        </tr>
      </tbody>
    </Table>
            
        </div>
    );
};

export default MyAppointment;