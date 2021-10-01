import React, { lazy, Suspense } from 'react';
import Spinner from '../../utilities/Spinner';

const ContactNumber = lazy(()=> import('./ContactNumber'));
const ContactMap = lazy(()=> import('./ContactMap'));

const Contact = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <ContactNumber/>
      <ContactMap/>
    </Suspense>
  );
};

export default Contact;