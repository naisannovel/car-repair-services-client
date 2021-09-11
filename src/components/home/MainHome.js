import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import About from "./about/About";
import Contact from "./contact/Contact";
import HowWeWorks from "./HowWeWorks";
import CustomerReviews from "./CustomerReviews";
import OurServices from "./OurServices";
import VehicleBrand from "./VehicleBrand";
import Hero from "./Hero";

const MainHome = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About />
      <HowWeWorks/>
      <OurServices/>
      <VehicleBrand/>
      <CustomerReviews/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default MainHome;
