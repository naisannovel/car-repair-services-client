import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AboutSection2 = () => {
  return (
    <div class="container-fluid about__second__content__container" style={{backgroundImage:`url(assets/images/about-bg.jpg)`}}>
      <div class="container row m-auto about__second__content__row__container text-center">
        <div class="col about__second__content__col__container">
          <FontAwesomeIcon icon={faCheckSquare} />
          <div>
            <h4>We Make It Easy</h4>
            <p>
              Get a quote and book a service online 24/7. Our mechanics will
              come to your home or office, even on evenings and weekends.
            </p>
          </div>
        </div>
        <div class="col about__second__content__col__container">
          <FontAwesomeIcon icon={faCheckSquare} />
          <div>
            <h4>OEM Factory Parts Warranty</h4>
            <p>
              OEM parts are parts that are specifically made by the vehicle's
              manufacturer and therefore make finding parts for the specific
              vehicle much easier.
            </p>
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col about__second__content__col__container">
          <FontAwesomeIcon icon={faCheckSquare} />
          <div>
            <h4>Fair And Transparent Pricing</h4>
            <p>
              OEM parts are parts that are specifically made by the vehicle's
              manufacturer and therefore make finding parts for the specific
              vehicle much easier.
            </p>
          </div>
        </div>
        <div class="col about__second__content__col__container">
          <FontAwesomeIcon icon={faCheckSquare} />
          <div>
            <h4>Happiness Guaranteed</h4>
            <p>
              OEM parts are parts that are specifically made by the vehicle's
              manufacturer and therefore make finding parts for the specific
              vehicle much easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
