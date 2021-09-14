import { Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import HorizontalLine from "../../utilities/HorizontalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getAllService, deleteService } from "../../../redux/actionCreators";
import Spinner from '../../utilities/Spinner';

const mapDispatchToProps = dispatch =>{
  return {
    fetchService: ()=> dispatch(getAllService()),
    removeService: (id)=> dispatch(deleteService(id))
  }
}

const mapStateToProps = state => {
  return {
    loading: state.service.isLoading,
    service: state.service.services,
  }
}

const ManageService = ({fetchService,loading,service,removeService}) => {
  useEffect(()=>fetchService(),[])

  const mapService = service.map((item,i) =>{
    return (
      <tr>
            <th scope="row" style={{ width: "5%" }}>
              { i+1 }
            </th>
            <td> { item.name } </td>
            <td> { item.price } </td>
            <td>
            <FontAwesomeIcon className='manage__service__edit__icon' icon={faEdit} />
            <FontAwesomeIcon onClick={()=> removeService(item._id)} className='manage__service__delete__icon' icon={faTrashAlt} />
            </td>
          </tr>
    )
  })

  let manageServicePage = null;
  if(!loading){
    manageServicePage = 
    <Table striped>
    <thead>
      <tr>
        <th>#</th>
        <th>Service</th>
        <th>Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      { mapService }
    </tbody>
  </Table>
  }else{
    manageServicePage = <Spinner/>
  }

  return (
    <div className="manage__service__container">
      <h1>Manage Services</h1>
      <HorizontalLine position="left" mTop="2rem" mBottom="3rem" />
      { manageServicePage }
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(ManageService);
