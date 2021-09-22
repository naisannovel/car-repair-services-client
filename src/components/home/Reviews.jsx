import React, { useEffect, useState } from "react";
import axios from "axios";
import { MAIN_API, API } from "../../redux/baseURL";
import Spinner from '../utilities/Spinner';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Reviews = () => {

  const [userReview,setUserReview] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${API}/review`)
    .then(response => {
      setIsLoading(false)
      setUserReview(response.data)
    })
  },[])

  const reviewCard = userReview.map(item => {
    return (
      <SwiperSlide key={item._id}>
        <div className="container m-auto review__slide__container">
          <div className="review__img__container">
            <img src={`${MAIN_API}/${item.image}`} alt="img" />
          </div>
          <div className="review__content__container">
            <p className='review'> {`${item.feedback}`} </p>
            <p className='review__author__info'>{`${item.name}`}, <span> {`${item.profession}`} </span> </p>
          </div>
          <div className="quote__container">
            <img src="assets/images/left.svg" alt="quote"/>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  let reviewPage = null;
  
  if(!isLoading){
    reviewPage = 
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
    autoplay={{ delay: 6000 }}
    className="swipper__container"
  >
    {reviewCard}
  </Swiper>
  }else{
    reviewPage = <Spinner/>
  }

  return (
    <div className="container-fluid review__main__container">
      <h1>Customer Reviews</h1>
      <p className="review__sub__title">People What Say About us</p>

      { reviewPage }
    </div>
  );
};

export default Reviews;
