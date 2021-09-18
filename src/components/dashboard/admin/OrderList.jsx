import React, { useEffect, useState } from "react";
import HorizontalLine from "../../utilities/HorizontalLine";
import { Table } from "reactstrap";
import { isAuthenticated, userInfo } from '../../authentication/authUtilities';
import axios from "axios";
import { API } from "../../../redux/baseURL";

const OrderList = () => {
  const [cartItem,setCartItem] = useState([]);

  useEffect(()=>{
    const { token } = isAuthenticated() ? userInfo() : "";
    axios.get(`${API}/cart/all/item`,{
      headers: {
          "Authorization": `Bearer ${token}`
      }})
  .then(response => {
    setCartItem(response.data);
  })
  },[]);

  const orderListItem = cartItem.length ? cartItem.map((item)=>(
    <tr style={{ height: "50px", lineHeight: "50px" }}>
    <td> { item?.service?.name } </td>
    <td> { item?.user?.email } </td>
    <td> { item?.user?.name } </td>
    <td>
      <select id="cars" name="cars" className="naisan" defaultValue={item?.status} onChange={(e)=>console.log(e.target.value)}>
        <option value="pending">pending</option>
        <option value="ongoing">ongoing</option>
        <option value="done">done</option>
      </select>
    </td>
  </tr>
  )): <h1 style={{marginTop:'20px'}}>No Data Available</h1>

  return (
    <div className="order__list__container">
      <h1>Order List</h1>
      <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
      <Table striped>
        <thead>
          <tr>
            <th>Service</th>
            <th>Email</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          { orderListItem }
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
