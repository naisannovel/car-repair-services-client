import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeForm from "./StripeForm";
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import HorizontalLine from "../utilities/HorizontalLine";

const stripePromise = loadStripe(
  "pk_test_51IeH6gL6cSctvL5CRe1beBmNAcztwKzQhl1oMTXv8wYOPYkbG4MtD9pEDbBbueHPeMjKlSKqceONsJxIXNsKX5IW00ycWi9yhb"
);

const mapStateToProps = state =>{
    console.log(state);
}

const StripeModal = ({open}) => {
  const [modal, setModal] = useState(open);

  const toggle = () => setModal(!modal);

  return (
    <div className="stripe__modal__container">
      <Modal isOpen={modal} toggle={toggle} backdrop={"static"} style={{marginTop:'70px'}}>
        {/* <ModalHeader>
          <h2>Card Information</h2>
        </ModalHeader> */}
        <div style={{textAlign:'center',padding:'20px 0 10px 0'}}>
          <h2>Card Information</h2>
          <HorizontalLine position="center" mTop="1rem" mBottom="1.5rem" />
          <div>
            <h4>Service: Tier repair</h4>
            <h4>Price: 1000</h4>
          </div>
        </div>
        <hr />
        <ModalBody>
          <Elements stripe={stripePromise}>
            <StripeForm />
          </Elements>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            style={{ fontSize: "13px" }}
            onClick={toggle}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps,null)(StripeModal);
