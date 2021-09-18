import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, Alert } from "reactstrap";
import HorizontalLine from "../utilities/HorizontalLine";
import { MAIN_API } from "../../redux/baseURL";
import StripePaymentGateway from '../payment/StripePaymentGateway';
import { connect } from "react-redux";


const mapStateToProps = state => {
  return {
    orderSuccessMsg: state.myService.successMsg,
    addCartLoading: state.myService.isLoading
  }
}

const ServiceDetailsModal = ({ isOpenModal, setIsOpenModal, data, orderSuccessMsg,addCartLoading }) => {

  const toggle = () => setIsOpenModal(!isOpenModal);
  
  return (
    <div className="stripe__modal__container">
      <Modal isOpen={isOpenModal} toggle={toggle} backdrop={"static"} style={{marginTop:'70px'}}>
        <div style={{textAlign:'center',marginTop:'15px'}}>
          <h1>Service Details</h1>
        </div>
          <HorizontalLine position="center" mTop=".5rem" mBottom="1rem" />
          <hr />
          { orderSuccessMsg !== null && <Alert color='success' style={{fontSize:'16px'}}>{orderSuccessMsg}</Alert>}
        <ModalBody>
          <div style={{textAlign:'center'}}>
          <img src={`${MAIN_API}/${data?.image}`} alt="service-img" />
          </div>
          <h2>name: { data?.name }</h2>
          <h2>price: { data?.price }</h2>
          <h2>about: { data?.about }</h2>
        </ModalBody>
        <StripePaymentGateway name={data?.name} price={data?.price} id={data?._id} />
        <ModalFooter>
          <Button
            color="secondary"
            style={{ fontSize: "13px" }}
            onClick={addCartLoading ? '': toggle}
          >
            {addCartLoading ? <span className="fa fa-spinner fa-pulse"></span> : 'cancel'}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps)(ServiceDetailsModal);
