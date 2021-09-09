import React, { useState } from "react";
import HorizontalLine from "../../utilities/HorizontalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCar, faCog } from "@fortawesome/free-solid-svg-icons";
import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";

const About = () => {
  const [item1, setItem1] = useState(true);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);

  let content;
  if (item1) {
    content = <AboutSection1 />;
  } else if (item2) {
    content = <AboutSection2 />;
  } else {
    content = <AboutSection3 />;
  }

  return (
    <div id='about' className="about__container">
      <h1 className="about__header">We Provide Expert Service</h1>
      <p className="about__description">
        We aim to earn your trust and have a long term relationship with you
      </p>
      <HorizontalLine position="center" mTop="3rem" mBottom="3rem" />{" "}
      {/* horizontal style component */}
      <div className="container m-auto text-center row">
        <div
          className="col-4 about__item__container"
          onClick={() => {
            setItem1(true);
            setItem2(false);
            setItem3(false);
          }}
        >
          <FontAwesomeIcon
            icon={faCog}
            className={item1 ? "active__about__item" : ""}
          />
          <h5>Additional Services</h5>
        </div>

        <div
          class="col-4 about__item__container about__second__item__container"
          onClick={() => {
            setItem1(false);
            setItem2(true);
            setItem3(false);
          }}
        >
          <FontAwesomeIcon
            icon={faCar}
            className={item2 ? "active__about__item" : ""}
          />
          <h5>Our Advantages</h5>
        </div>
        <div
          class="col-4 about__item__container"
          onClick={() => {
            setItem1(false);
            setItem2(false);
            setItem3(true);
          }}
        >
          <FontAwesomeIcon
            icon={faInfoCircle}
            className={item3 ? "active__about__item" : ""}
          />
          <h5>About Company</h5>
        </div>
      </div>
      {content}
    </div>
  );
};

export default About;
