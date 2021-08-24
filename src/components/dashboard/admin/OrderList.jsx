import React from 'react';
import HorizontalLine from '../../utilities/HorizontalLine';
import { Table } from 'reactstrap';

const OrderList = (props) => {
    return (
        <div className='order__list__container'>
            <h1>My Appointment</h1>
            <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
            <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Service</th>
          <th>Email</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Condition</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{height:'50px',lineHeight:'50px'}}>
          <th scope="row" style={{width:'5%'}}>1</th>
          <td> Lorem ipsum, dolor sit amet c ipsum, dolor sit amet c</td>
          <td> email@email.com</td>
          <td> naisan novel</td>
          <td>$ 15.000</td>
          <td>paid </td>
          <td>ongoing </td>
        </tr>
      </tbody>
    </Table>
            
        </div>
    );
};

export default OrderList;