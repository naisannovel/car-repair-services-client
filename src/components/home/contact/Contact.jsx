import React, { lazy, Suspense } from 'react';
import SpinnerSecondary from '../../utilities/SpinnerSecondary';

const ContactNumber = lazy(()=> import('./ContactNumber'));
const ContactMap = lazy(()=> import('./ContactMap'));

const Contact = () => {
  return (
    <Suspense fallback={<SpinnerSecondary/>}>
      <ContactNumber/>
      <ContactMap/>
    </Suspense>
  );
};

export default Contact;