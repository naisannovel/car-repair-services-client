import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const AuthHeader = (props) => {
    const history = useHistory()

  return (
    <div style={{backgroundColor:'#ECF0F1'}}>
      <Navbar className='container'>
        <NavbarBrand onClick={()=>history.push('/')}>
        <img src="assets/images/logo.png" style={{width:'85%',cursor:'pointer'}} className="w-md-50" alt="Logo" />
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default AuthHeader;