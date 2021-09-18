import React, { useEffect, useState } from "react";
import HorizontalLine from "../../utilities/HorizontalLine";
import { Alert, Table } from "reactstrap";
import { isAuthenticated, userInfo } from '../../authentication/authUtilities';
import axios from "axios";
import { API } from "../../../redux/baseURL";

const OrderList = () => {
  const [cartItem,setCartItem] = useState([]);
  const [updatedMsg,setUpdatedMsg] = useState(null);

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

  const itemStatusUpdateHandler = (id,value)=>{
    const { token } = isAuthenticated() ? userInfo() : "";
    axios.put(`${API}/cart/${id}`,{ status: value },{
      headers: {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`,
    }
    })
    .then(response =>{
      setUpdatedMsg(response.data)
      setTimeout(()=>setUpdatedMsg(null),2000)
    })
  }

  const orderListItem = cartItem.length ? cartItem.map((item)=>(
    <tr style={{ height: "50px", lineHeight: "50px" }}>
    <td> { item?.service?.name } </td>
    <td> { item?.user?.email } </td>
    <td> { item?.user?.name } </td>
    <td>
      <select id="cars" name="cars" className="naisan" defaultValue={item?.status} 
      onChange={(e)=>itemStatusUpdateHandler(item?._id,e.target.value)
      }>
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
      { updatedMsg !== null && <Alert color='success' style={{fontSize:'16px'}}>{updatedMsg}</Alert>}
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
