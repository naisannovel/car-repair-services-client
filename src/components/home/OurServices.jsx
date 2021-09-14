import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllService } from '../../redux/actionCreators';
import { connect } from "react-redux";
import Spinner from '../utilities/Spinner';
import { MAIN_API } from "../../redux/baseURL";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const mapDispatchToProps = dispatch =>{
  return {
    fetchService: ()=> dispatch(getAllService())
  }
}

const mapStateToProps = state => {
  return {
    loading: state.service.isLoading,
    service: state.service.services,
  }
}

const Services = ({fetchService,loading,service}) => {

  useEffect(()=>fetchService(),[])

  const serviceCard = service.map(item =>{
      return (
            <SwiperSlide>
                <div className='service__card__container'>
                <h4> { item.name } </h4>
                <h2> { item.price } </h2>
                <img src={ `${MAIN_API}/${item.image}` } alt="service-icon"/>
                <h6> { item.about } </h6>
                <button className='primary-btn-small'>Appointment</button>
                </div>
            </SwiperSlide>
      )
  })

  let ourServicesPage = null;
  if(!loading){
    ourServicesPage = <Swiper
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
  }else{
    ourServicesPage = <Spinner/>
  }

  return (
    <div className="container-fluid service__container" id='service'>
      <h1>Our Services</h1>
      <p className="service__sub__title">Fixed price car servicing packages</p>

      { ourServicesPage }
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(Services);
