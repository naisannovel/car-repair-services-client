import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, { Navigation, Pagination, Autoplay, } from "swiper/core";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Hero = () => {
  document.title = "Car Repair Service - Home"

  const sliderData = [
    {
      id: 1,
      bg: 'assets/images/slide1.jpg',
      subHeader: "offer fast",
      header: "reliable service",
      description: `Our Mission is to serve our customers and always deliver the
      highest level of customer service; to develop our team and
      strive to constantly improve; and to conduct ourselves in an
      environmentally responsible manner.`
    },
    {
      id: 2,
      bg: 'assets/images/slide2.jpg',
      subHeader: "multi-point",
      header: "vehicle inspection",
      description: `Our Mission is to serve our customers and always deliver the
      highest level of customer service; to develop our team and
      strive to constantly improve; and to conduct ourselves in an
      environmentally responsible manner.`
    },
    {
      id: 3,
      bg: 'assets/images/slide3.jpg',
      subHeader: "customer service",
      header: "responsible manner",
      description: `To be the world’s most exciting leader in automotive business
      intelligence solutions. We will generate excitement through
      implementing pioneering ideas, problem solving & going beyond
      our customers’ expectations.`
    },
  ]

  const slider = sliderData.map(item =>(
    <SwiperSlide className="slide__container" style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.6) 100%), url(${item.bg})`}} key={item.id}>
      <div className="container row m-auto slide__row__container">
        <div className="col-md-8">
          <h4> { item.subHeader } </h4>
          <h1> { item.header } </h1>
          <h5> { item.description } </h5>
          <button className="primary-btn-big">schedule service</button>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        className="hero__slider__container"
        autoplay={{ delay: 3000 }}
        loop={true}
        id='home'
      >
        { slider }
      </Swiper>
    </>
  );
};

export default Hero;