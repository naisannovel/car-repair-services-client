import { Alert } from "reactstrap";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import HorizontalLine from "../../utilities/HorizontalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getAllServiceWithoutImage, deleteService,servicePriceUpdate } from "../../../redux/serviceActionCreators";
import SpinnerSecondary from "../../utilities/SpinnerSecondary";

const mapDispatchToProps = dispatch =>{
  return {
    fetchService: ()=> dispatch(getAllServiceWithoutImage()),
    removeService: (id)=> dispatch(deleteService(id)),
    priceUpdateHandler: (id,value,cb) => dispatch(servicePriceUpdate(id,value,cb))
  }
}

const mapStateToProps = state => {
  return {
    loading: state.service.isLoading,
    service: state.service.services,
    serviceUpdateMsg: state.service.updateSuccessMsg
  }
}

const ManageService = ({fetchService,loading,service,removeService,priceUpdateHandler,serviceUpdateMsg}) => {

  document.title = "Car Repair Service - Manage Service"

  const [editId,setEditId] = useState(null);

  const [InputPrice,setInputPrice] = useState({ price:'' })

  useEffect(()=>fetchService(),[])

  const mapService = service?.map((item,i) =>{
    return (
      <tr>
            <th scope="row" style={{ width: "5%" }}>
              { i+1 }
            </th>
            <td key={item._id}> { item.name } </td>
            <td className='text-center'> 
              { 
              editId !== item?._id ?
              item.price :             
              <input type="number" name='price' value={InputPrice?.price} 
              onChange={(e)=>setInputPrice({price:e.target.value})} />           
              } 
            </td>
            <td>
            {
              editId !== item?._id ?
              <FontAwesomeIcon className='manage__service__edit__icon' icon={faEdit} 
              onClick={()=>{
                setEditId(item?._id);
                setInputPrice({price: item?.price})
              }} /> :
              <FontAwesomeIcon className='manage__service__check__icon' icon={faCheck} 
              onClick={()=>priceUpdateHandler(item,InputPrice,()=>setEditId(null))} />
            }
            <FontAwesomeIcon onClick={()=> removeService(item._id)} className='manage__service__delete__icon' icon={faTrashAlt} />
            </td>
          </tr>
    )
  })

  let manageServicePage = null;
  if(!loading){
    manageServicePage = 
      <Table striped>
      <thead style={{textAlign: 'center'}}>
        <tr>
          <th>#</th>
          <th>Service</th>
          <th className='text-center'>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody style={{textAlign: 'center'}}>
        { mapService }
      </tbody>
    </Table>
  }else{
    manageServicePage = <SpinnerSecondary/>
  }

  return (
    <div className="manage__service__container">
      <div style={{ textAlign: 'center' }}>
        <h1>Manage Services</h1>
        <HorizontalLine position="center" mTop="2rem" mBottom="3rem" />
      </div>
      { serviceUpdateMsg !== null && <Alert color='success' style={{fontSize:'16px'}}>{serviceUpdateMsg}</Alert>}
      { manageServicePage }
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(ManageService);
