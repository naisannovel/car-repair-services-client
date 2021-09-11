import React from "react";
import HorizontalLine from "../utilities/HorizontalLine";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const brand = [
  "assets/images/brand-01.png",
  "assets/images/brand-02.png",
  "assets/images/brand-03.png",
  "assets/images/brand-04.png",
  "assets/images/brand-05.png",
  "assets/images/brand-06.png",
  "assets/images/brand-07.png",
];

const vehicleItem = brand.map((item) => {
  return (
    <SwiperSlide className='border vehicle__icon__container'>
      <img src={item} alt="brand" />
    </SwiperSlide>
  );
});

const Vehicle = () => {
  return (
    <div className="vehicle__container">
      <h1>We Repair All Makes of Automobiles</h1>
      <p>We work with all makes and models of vehicles</p>
      <HorizontalLine position="center" mTop="2.5rem" mBottom="2.5rem" />

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="container"
      >
        {vehicleItem}
      </Swiper>
    </div>
  );
};

export default Vehicle;
