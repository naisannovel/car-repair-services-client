import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faCar,
  faCog,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Services = () => {
  const servicesData = [
    {
      title: "Brake Fluid Flush Service",
      price: 24.99,
      icon: "assets/images/service-1.png",
      description:
        "Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.",
    },
    {
      title: "Internal Transmission Repair",
      price: 59.99,
      icon: "assets/images/service-2.png",
      description:
        "Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.",
    },
    {
      title: "Engine Coolant Inspection",
      price: 34.99,
      icon: "assets/images/service-3.png",
      description:
        "Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.",
    },
    {
      title: "Synthetic Blend Oil Change",
      price: 39.99,
      icon: "assets/images/service-4.png",
      description:
        "Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.",
    },
  ];

  const serviceCard = servicesData.map((item) => {
    return (
      <SwiperSlide>
        <div className="container m-auto review__slide__container d-flex">
          <div className="review__img__container">
            <img src="assets/images/about1.jpg" alt="img" />
          </div>
          <div className="review__content__container">
            <p className='review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              provident tempora sequi facilis nostrum omnis error, dolore quam
              soluta voluptate corrupti similique quaerat esse ipsum eos
              inventore dolores expedita dolorum? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className='review__author__info'>naisan novel, <span>Developer</span> </p>
          </div>
          <div className="quote__container">
            <img src="assets/images/left.svg" alt="quote"/>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="container-fluid review__main__container">
      <h1>Customer Reviews</h1>
      <p className="review__sub__title">People What Say About us</p>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        autoplay={{ delay: 3000 }}
        className="swipper__container"
      >
        {serviceCard}
      </Swiper>
    </div>
  );
};

export default Services;
