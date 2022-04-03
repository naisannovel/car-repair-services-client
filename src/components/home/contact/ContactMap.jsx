import React from "react";
import GoogleMap from "../../utilities/GoogleMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ContactMap = () => {
  return (
    <div>
      <div className="contact__map__container">
        <GoogleMap />
        <div className="contact__map__content">
          <h4>Contact Info</h4>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            2605 Caton Hill Road, Woodbridge, VA 22192
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            0-000-000-0000
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            mail@mail.com
          </p>
          <h4 style={{marginTop:'50px'}}>Opening Hours</h4>
          <p style={{display:'flex'}}>
            <FontAwesomeIcon icon={faClock} />
            <p>
              <span style={{display:'block'}}>Mon-Fri: 7:00 AM - 6:00 PM</span>
              <span style={{display:'block'}}>Saturday: 9:00 AM - 5:00 PM</span>
              <span style={{display:'block'}}>Sunday: Closed</span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
