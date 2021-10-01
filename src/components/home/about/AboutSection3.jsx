import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HorizontalLine from "../../utilities/HorizontalLine";

const AboutSection3 = () => {
  const aboutComapanys = [
    "24 Month / 24,000km Nationwide Warranty",
    "Courtesy Local Shuttle Service",
    "Customer Rewards Program",
    "ASE Certified Technicians",
    "24-Hour Roadside Assistance",
    "Courtesy Loaner Vehicle",
  ];

  const aboutComapanyData = aboutComapanys.map((item) => (
    <span className="d-flex mt-3">
      <FontAwesomeIcon icon={faWrench} />
      <span>{item}</span>
    </span>
  ));
  return (
    <div className="container-fluid">
      <div className="row about__third__content__row__container">
        <div class="col-md-6 about__third__content__col__container-one">
          <h1>About Car Repair Services</h1>
          <HorizontalLine position="flex-start" mTop="1rem" mBottom="1rem" />
          <p>
            We use the latest diagnostic equipment to guarantee your vehicle is
            repaired or serviced properly and in a timely fashion. We are a
            member of Professional Auto Service, an elite performance network,
            where independent service facilities share common goals of being
            world-class automotive service centers.
          </p>
          <div className="about__third__content__col__container__content">
            {aboutComapanyData}
          </div>
        </div>
        <div className="col-md-6 about__third__content__col__container-two">
          <img src="assets/images/about2.jpg" alt="Additional Services" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
