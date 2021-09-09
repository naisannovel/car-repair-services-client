import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="container footer__content__container">
        <p>
          © {new Date().getFullYear()} Car Repair Services, All Rights Reserved
        </p>
        <div class="footer__social__icon">
          <a href="#" className='social__icon__container'>
          <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className='social__icon__container'>
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className='social__icon__container'>
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className='social__icon__container'>
          <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
