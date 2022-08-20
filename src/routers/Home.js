import React, { lazy, Suspense } from "react";
// import NavBar from "../shared/NavBar.jsx";
import Spinner from '../components/utilities/Spinner';

const Hero = lazy(()=> import("../components/home/Hero"));
const About = lazy(()=> import("../components/home/about/About"));
const HowWeWorks = lazy(()=> import("../components/home/HowWeWorks"));
const OurServices = lazy(()=> import("../components/home/OurServices"));
const VehicleBrand = lazy(()=> import("../components/home/VehicleBrand"));
const Reviews = lazy(()=> import("../components/home/Reviews"));
const Contact = lazy(()=> import("../components/home/contact/Contact"));


const Home = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      {/* <NavBar/> */}
      <Hero/>
      <About />
      <HowWeWorks/>
      <OurServices/>
      <VehicleBrand/>
      <Reviews/>
      <Contact/>
    </Suspense>
  );
};

export default Home;
