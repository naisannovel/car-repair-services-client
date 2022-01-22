import React, { lazy, Suspense } from "react";
import NavBar from "./NavBar";
import Spinner from '../utilities/Spinner';

// const Hero = lazy(()=> import("./Hero"));
// const About = lazy(()=> import("./about/About"));
// const HowWeWorks = lazy(()=> import("./HowWeWorks"));
// const OurServices = lazy(()=> import("./OurServices"));
// const VehicleBrand = lazy(()=> import("./VehicleBrand"));
// const Reviews = lazy(()=> import("./Reviews"));
// const Contact = lazy(()=> import("./contact/Contact"));
// const Footer = lazy(()=> import("./Footer"));

import Hero from './Hero';
import About from './about/About';
import HowWeWorks from './HowWeWorks.jsx';
import OurServices from './OurServices.jsx';
import VehicleBrand from './VehicleBrand.jsx';
import Reviews from './Reviews.jsx';
import Contact from './contact/Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About />
      <HowWeWorks/>
      <OurServices/>
      <VehicleBrand/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;


// const Home = () => {
//   return (
//     <Suspense fallback={<Spinner/>}>
//       <NavBar/>
//       <Hero/>
//       <About />
//       <HowWeWorks/>
//       <OurServices/>
//       <VehicleBrand/>
//       <Reviews/>
//       <Contact/>
//       <Footer/>
//     </Suspense>
//   );
// };

// export default Home;
