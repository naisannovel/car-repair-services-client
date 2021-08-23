import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeForm from './StripeForm';




import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const stripePromise = loadStripe('pk_test_51IeH6gL6cSctvL5CRe1beBmNAcztwKzQhl1oMTXv8wYOPYkbG4MtD9pEDbBbueHPeMjKlSKqceONsJxIXNsKX5IW00ycWi9yhb');

const StripeModal = () => {


  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='stripe__modal__container'>
      <Button color="danger" onClick={toggle}>Pay</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Card Information</ModalHeader>
        <ModalBody>
        <Elements stripe={stripePromise}>
      <StripeForm/>
    </Elements>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default StripeModal;