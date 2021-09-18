import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { MAIN_API } from '../../redux/baseURL';
import { serviceIsCart, serviceAddInCart, takeServiceLoading } from "../../redux/actionCreators";
import { connect } from "react-redux";
import icon from '../../assets/service.svg'


const mapDispatchToProps = dispatch =>{
  return {
    isCart: data => dispatch(serviceIsCart(data)),
    getService: data => dispatch(serviceAddInCart(data)),
    loading: data => dispatch(takeServiceLoading(data))
  }
}

const StripePaymentGateway = ({name,price,id,getService,loading}) => {

  const makePayment = token => {
    const service = {
      id,name,price
    }
    const body = { token,service };
    const headers = {
      "Content-Type": "application/json"
    };
    loading(true)

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
    <div className='text-center mt-4 mb-3'>
               <StripeCheckout
          stripeKey='pk_test_51IeH6gL6cSctvL5CRe1beBmNAcztwKzQhl1oMTXv8wYOPYkbG4MtD9pEDbBbueHPeMjKlSKqceONsJxIXNsKX5IW00ycWi9yhb'
          image={icon}
          token={makePayment}
          name="Car Repair Service"
          amount={price * 100}
          allowRememberMe
        //   shippingAddress
        //   billingAddress
        />
    </div>
  );
}

export default connect(null,mapDispatchToProps)(StripePaymentGateway);
