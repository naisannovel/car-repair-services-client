import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../Header/NavBar";
import About from "./about/About";
import Contact from "./contact/Contact";
import Works from "./how-works/Works";
import Reviews from "./reviews/Reviews";
import Services from "./Service/Services";
import Vehicle from "./vehicle-items/Vehicle";

const Body = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <About />
      <Works/>
      <Services/>
      <Vehicle/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Body;
