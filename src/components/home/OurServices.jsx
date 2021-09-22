import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllService } from '../../redux/serviceActionCreators';
import { connect } from "react-redux";
import Spinner from '../utilities/Spinner';
import { MAIN_API } from "../../redux/baseURL";
import { serviceAddInCart, serviceIsCart } from '../../redux/cartActionCreators';
import { isAuthenticated } from '../authentication/authUtilities';
import { useHistory } from "react-router";
import { Alert } from "reactstrap";
import ServiceDetailsModal from "../modal/ServiceDetailsModal";


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
    fetchService: ()=> dispatch(getAllService()),
    getService: data => dispatch(serviceAddInCart(data)),
    isCart: (data,cb) => dispatch(serviceIsCart(data,cb))
  }
}

const mapStateToProps = state => {
  return {
    serviceLoading: state.service.isLoading,
    service: state.service.services,
    orderErrMsg: state.myService.errMsg,
    addCartLoading: state.myService.isLoading
  }
}

const Services = ({fetchService,serviceLoading,service,orderErrMsg,isCart,addCartLoading}) => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [data, setData] = useState(null);

  // media query
  const [windowWidth,setWindowWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
   };
  window.addEventListener("resize", handleResize);


  useEffect(()=>fetchService(),[])
  const history = useHistory()

  const serviceCard = service.map((item,i) =>{
      return (
            <SwiperSlide key={item._id}>
                <div className='service__card__container'>
                <h4> { item.name } </h4>
                <h2> ${ item.price } </h2>
                <img src={ `${MAIN_API}/${item.image}` } alt="service-icon"/>
                <h6> { item.about } </h6>
                <button className='primary-btn-small' onClick={()=>{
                  if(isAuthenticated()){
                    isCart(item._id,()=>{
                      setData(item);
                      setIsOpenModal(!isOpenModal)
                    })
                  }else{
                    history.push('/login')
                  }
                }}> {addCartLoading ? <span className="fa fa-spinner fa-pulse"></span> : 'Appointment'}</button>
                </div>
            </SwiperSlide>
      )
  })

  let ourServicesPage = null;
  if(!serviceLoading){
    ourServicesPage = 
        <Swiper
              slidesPerView={windowWidth > 640 ? 3:1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              autoplay={{ delay: 20000 }}
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
      { orderErrMsg !== null && <Alert color='danger' style={{fontSize:'16px'}}>{orderErrMsg}</Alert>}
      <ServiceDetailsModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} data={data} />
      { ourServicesPage }
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(Services);
