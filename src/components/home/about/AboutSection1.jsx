import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

const AboutSection1 = () => {

  const additionalServices = [
    "FREE Loaner Cars",
    "FREE Shuttle Service",
    "General Auto Repair & Maintenance",
    "Transmission Repair & Replacement",
    "Fuel System Repair",
    "Exhaust System Repair",
    "Engine Cooling System Maintenance",
    "Electrical Diagnostics",
    "Starting and Charging",
    "Wheel Alignment",
    "Computer Diagnostic Testing",
    "Manufacturer Recommended Service",
    "Brake Repair and Replacement",
    "Air Conditioning A/C Repair",
    "Tire Repair and Replacement",
    "Vehicle Preventative Maintenance"
  ];


  const additionalServiceContent = additionalServices.map((item) => (
    <span className="d-flex mt-3">
      <FontAwesomeIcon icon={faWrench} />
      <span>{item}</span>
    </span>
  ));

  return (
    <div className="about__all__section__container">
        <div className="about__first__content__col__container-one">
          <img src="assets/images/slide1.jpg" alt="Additional Services" />
        </div>
        <div class="about__first__content__col__container-two">
          <div class="container">
            <p>Below are some of the many auto repair services we offer:</p>
            <div className="about__first__content__col__container__content">
              {additionalServiceContent}
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutSection1;
