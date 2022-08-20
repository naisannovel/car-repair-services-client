import React, { lazy, Suspense } from 'react';
import SpinnerSecondary from '../../utilities/SpinnerSecondary';

const ContactNumber = lazy(()=> import('./ContactNumber'));
const ContactMap = lazy(()=> import('./ContactMap'));
const Footer = lazy(()=> import('./../Footer'));

const Contact = () => {
  return (
    <Suspense fallback={<SpinnerSecondary/>}>
      <div  id="contact" >
        <ContactNumber/>
        <div>
          <ContactMap/>
          <Footer/>
        </div>
      </div>
    </Suspense>
  );
};

export default Contact;