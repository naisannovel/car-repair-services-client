import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { MAIN_API } from '../../redux/baseURL';
import { serviceAddInCart } from "../../redux/actionCreators";
import { connect } from "react-redux";


const mapDispatchToProps = dispatch =>{
  return {
    getService: data => dispatch(serviceAddInCart(data))
  }
}

const StripePaymentGateway =({name,price,id,getService}) => {

  const makePayment = token => {
    const service = {
      id,name,price
    }
    const body = { token,service };
    const headers = {
      "Content-Type": "application/json"
    };

    return fetch(`${MAIN_API}/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        const { status,statusText } = response;
        if(status === 200 && statusText === "OK"){
          getService(id)
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
        <StripeCheckout
          stripeKey='pk_test_51IeH6gL6cSctvL5CRe1beBmNAcztwKzQhl1oMTXv8wYOPYkbG4MtD9pEDbBbueHPeMjKlSKqceONsJxIXNsKX5IW00ycWi9yhb'
          image="assets/images/service.svg"
          token={makePayment}
          name="Car Repair Service"
          description={ name }
          amount={price * 100}
          allowRememberMe
        //   shippingAddress
        //   billingAddress
        >
          <button className='primary-btn-small'>Appointment</button>
        </StripeCheckout>
    </div>
  );
}

export default connect(null,mapDispatchToProps)(StripePaymentGateway);
