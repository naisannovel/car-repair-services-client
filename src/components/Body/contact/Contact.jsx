import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="container row contact__container">
      <div className="col-md-7 contact__first__col__container">
        <div className="contact__icon__container">
          <img src="assets/images/truck.svg" alt="truck" />
        </div>
        <div>
          <h3>24 Hour Breakdown Service</h3>
          <p>
            To order a Breakdown Recovery Service now or if you require a quote,
            please contact us
          </p>
        </div>
      </div>
      <div className="col-md-4 offset-1 contact__second__col__container">
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <span>1-800-123-4567</span>
        </div>
        <p>
          Whether you're the driver of your own car or a rental, you're covered
          24/7, 365 days a year
        </p>
      </div>
    </div>
  );
};

export default Contact;
