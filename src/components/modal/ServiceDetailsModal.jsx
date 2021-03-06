import React from "react";
import { Button, Modal, ModalBody, ModalFooter, Alert } from "reactstrap";
import HorizontalLine from "../utilities/HorizontalLine";
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
          <img src={ `data:image/png;base64,${data?.image?.img}` } alt="service-img" />
          </div>
          <h2 style={{textAlign:'center',fontWeight:'800',marginTop:'25px'}}>{ data?.name } - ${ data?.price }</h2>
          <h2 style={{textAlign:'center', fontWeight:'200',fontSize:'16px',marginTop:'10px'}}>{ data?.about }</h2>
        </ModalBody>
        <StripePaymentGateway name={data?.name} price={data?.price} id={data?._id} setIsOpenModal={setIsOpenModal} />
        <ModalFooter>
          <Button
            color="secondary"
            style={{ fontSize: "13px" }}
            onClick={addCartLoading ? '': toggle}
          >cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps)(ServiceDetailsModal);
