import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faWrench } from "@fortawesome/free-solid-svg-icons";

const AboutSection1 = () => {

  const [readMore,setReadMore] = useState(false);

  const additonalServices = [
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
    "Vehicle Preventative Maintenance",
    "State Emissions Inspection",
    "Emission Repair Facility",
    "Oil Change",
    "Brake Job/Brake Service",
    "Engine Cooling System Flush & Repair",
    "Steering and Suspension Work",
  ];

  const renderItems = () => {
    if (readMore) {
      return additonalServices;
    }
    return additonalServices.slice(0, 10);
  }

  const additionalServiceContent = renderItems().map((item) => (
    <span className="d-flex mt-3">
      <FontAwesomeIcon icon={faWrench} />
      <span>{item}</span>
    </span>
  ));

  return (
    <div className="container-fluid">
      <div className="row about__first__content__row__container">
        <div className="col-md-6 about__first__content__col__container-one">
          <img src="assets/images/about1.jpg" alt="Additional Services" />
        </div>
        <div class="col-md-6 about__first__content__col__container-two">
          <div class="container">
            <p>Below are some of the many auto repair services we offer:</p>
            <div className="about__first__content__col__container__content">
              {additionalServiceContent}
            </div>
              <div className='read__more__toggle__icon'>
                { !readMore ?
                <h4 onClick={()=>setReadMore(true)}><FontAwesomeIcon icon={faPlus} />More Services</h4>:''
                }
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
