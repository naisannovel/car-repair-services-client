import React from "react";
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

  const serviceCard = servicesData.map(item =>{
      return (
            <SwiperSlide>
                <div className='service__card__container'>
                <h4> { item.title } </h4>
                <h2> { item.price } </h2>
                <img src={ item.icon } alt="service-icon"/>
                <h6> { item.description } </h6>
                <button className='primary-btn-small'>Appointment</button>
                </div>
            </SwiperSlide>
      )
  })

  return (
    <div className="container-fluid service__container" id='service'>
      <h1>Our Services</h1>
      <p className="service__sub__title">Fixed price car servicing packages</p>

      <Swiper
        slidesPerView={3}
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
          { serviceCard }
      </Swiper>
    </div>
  );
};

export default Services;
