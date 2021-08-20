import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/core";
import NavBar from "./NavBar";

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const Hero = () => {
  const slides = [
    {
      id: 1,
      slide: () => (
        <SwiperSlide className="first__slide__container">
          <div className="container row m-auto first__slide__row__container">
            <div className="col-8">
              <h4>offer fast</h4>
              <h1>reliable service</h1>
              <h5>
                Our Mission is to serve our customers and always deliver the
                highest level of customer service; to develop our team and
                strive to constantly improve; and to conduct ourselves in an
                environmentally responsible manner.
              </h5>
              <button className="primary-btn-big">schedule service</button>
            </div>
          </div>
        </SwiperSlide>
      ),
    },
    {
      id: 2,
      slide: () => (
        <SwiperSlide className="second__slide__container">
          <div className="container row m-auto second__slide__row__container">
            <div className="col-8">
              <h4>multi-point</h4>
              <h1>vehicle inspection</h1>
              <h5>
                To be the world’s most exciting leader in automotive business
                intelligence solutions. We will generate excitement through
                implementing pioneering ideas, problem solving & going beyond
                our customers’ expectations.
              </h5>
              <button className="primary-btn-big">schedule service</button>
            </div>
          </div>
        </SwiperSlide>
      ),
    },
    {
      id: 3,
      slide: () => (
        <SwiperSlide className="third__slide__container">
          <div className="container row m-auto third__slide__row__container">
            <div className="col-8">
              <h4>multi-point</h4>
              <h1>vehicle inspection</h1>
              <h5>
                To be the world’s most exciting leader in automotive business
                intelligence solutions. We will generate excitement through
                implementing pioneering ideas, problem solving & going beyond
                our customers’ expectations.
              </h5>
              <button className="primary-btn-big">schedule service</button>
            </div>
          </div>
        </SwiperSlide>
      ),
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="hero__slider__container"
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((item) => item.slide())}
      </Swiper>
    </>
  );
};

export default Hero;

// import React, { useRef, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/effect-fade/effect-fade.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";

// import SwiperCore, {
//   EffectFade,
//   Navigation,
//   Pagination,
//   Autoplay,
// } from "swiper/core";
// import NavBar from "./NavBar";

// SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

// const Hero = () => {
//   const slides = [
//     {
//       id: 1,
//       slide: () => (
//         <SwiperSlide className="first__slide__container">
//           <div
//             className="container row m-auto first__slide__row__container"
//           >
//               <div className="col-8">
//                 <h4>offer fast</h4>
//                 <h1>reliable service</h1>
//                 <h5>Our Mission is to serve our customers and always deliver the highest level of customer service; to develop our team and strive to constantly improve; and to conduct ourselves in an environmentally responsible manner.</h5>
//                 <button className="primary-btn-big">schedule service</button>
//               </div>
//             </div>
//         </SwiperSlide>
//       ),
//     },
//     {
//       id: 2,
//       slide: () => (
//         <SwiperSlide className="second__slide__container">
//           <div
//             className="container row m-auto second__slide__row__container"
//             >
//               <div className="col-8">
//                 <h4>multi-point</h4>
//                 <h1>vehicle inspection</h1>
//                 <h5>To be the world’s most exciting leader in automotive business intelligence solutions. We will generate excitement through implementing pioneering ideas, problem solving & going beyond our customers’ expectations.</h5>
//                 <button className="primary-btn-big">schedule service</button>
//               </div>
//             </div>
//         </SwiperSlide>
//       ),
//     },
//     {
//       id: 3,
//       slide: () => (
//         <SwiperSlide className="third__slide__container">
//           <div
//             className="container row m-auto third__slide__row__container"
//             >
//               <div className="col-8">
//                 <h4>multi-point</h4>
//                 <h1>vehicle inspection</h1>
//                 <h5>To be the world’s most exciting leader in automotive business intelligence solutions. We will generate excitement through implementing pioneering ideas, problem solving & going beyond our customers’ expectations.</h5>
//                 <button className="primary-btn-big">schedule service</button>
//               </div>
//             </div>
//         </SwiperSlide>
//       ),
//     },
//   ];

//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         effect={"fade"}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         className="hero__slider__container"
//         // autoplay={{ delay: 3000 }}
//         // loop={true}
//       >

//         {slides.map((item) => item.slide())}
//       </Swiper>
//     </>
//   );
// };

// export default Hero;
