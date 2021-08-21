import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import ContactMap from "./contact/ContactMap";
import Works from "./how-works/Works";
import Reviews from "./reviews/Reviews";
import Services from "./Service/Services";
import Vehicle from "./vehicle-items/Vehicle";

const Body = () => {
  return (
    <div>
      <About />
      <Works/>
      <Services/>
      <Vehicle/>
      <Reviews/>
      <Contact/>
      <ContactMap/>
    </div>
  );
};

export default Body;
