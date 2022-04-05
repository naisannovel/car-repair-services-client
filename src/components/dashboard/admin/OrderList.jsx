import React, { useEffect, useState } from "react";
import HorizontalLine from "../../utilities/HorizontalLine";
import { Alert, Table } from "reactstrap";
import { isAuthenticated, userInfo } from '../../authentication/authUtilities';
import axios from "axios";
import { API } from "../../../redux/baseURL";
import SpinnerSecondary from "../../utilities/SpinnerSecondary";

const OrderList = () => {

  document.title = "Car Repair Service - Order List"

  const [cartItem,setCartItem] = useState([]);
  const [updatedMsg,setUpdatedMsg] = useState(null);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    const { token } = isAuthenticated() ? userInfo() : "";
    axios.get(`${API}/cart/all/item`,{
      headers: {
          "Authorization": `Bearer ${token}`
      }})
      .then(response => {
        setLoading(false)
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

  const orderListItem = cartItem.length ? cartItem.map(item=>(
        <tr style={{ height: "50px", lineHeight: "50px", textAlign: 'center' }}>
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

    let orderListItemPage = null;

    if(!loading){
      orderListItemPage = 
      <Table striped>
        <thead style={{textAlign: 'center'}}>
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
    }else{
      orderListItemPage = <SpinnerSecondary/>
    }

  return (
    <div className="order__list__container">
      <div style={{ textAlign: 'center' }}>
        <h1>Order List</h1>
        <HorizontalLine position="center" mTop="2rem" mBottom="3rem" />
      </div>
      { updatedMsg !== null && <Alert color='success' style={{fontSize:'16px'}}>{updatedMsg}</Alert>}
      { orderListItemPage }
    </div>
  );
};

export default OrderList;
