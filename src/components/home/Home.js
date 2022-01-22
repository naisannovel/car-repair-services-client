import React, { lazy, Suspense } from "react";
import NavBar from "./NavBar";
import Spinner from '../utilities/Spinner';

const Hero = lazy(()=> import("./Hero"));
const About = lazy(()=> import("./about/About"));
const HowWeWorks = lazy(()=> import("./HowWeWorks"));
const OurServices = lazy(()=> import("./OurServices"));
const VehicleBrand = lazy(()=> import("./VehicleBrand"));
const Reviews = lazy(()=> import("./Reviews"));
const Contact = lazy(()=> import("./contact/Contact"));
const Footer = lazy(()=> import("./Footer"));


const Home = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <NavBar/>
      <Hero/>
      <About />
      <HowWeWorks/>
      <OurServices/>
      <VehicleBrand/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </Suspense>
  );
};

export default Home;
