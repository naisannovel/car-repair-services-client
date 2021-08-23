import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

const Stripe = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <div className="stripe__outer__container">
        <div class="stripe__inner__container">
      <form onSubmit={handleSubmit}>
          <label>
            Card number
            <CardNumberElement />
          </label>
          <label>
            Expiration date
            <CardExpiryElement />
          </label>
          <label>
            CVC
            <CardCvcElement />
          </label>
        <button className="primary-btn-small" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      </div>
    </div>
  );
};

export default Stripe;
