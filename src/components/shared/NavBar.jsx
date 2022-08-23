import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link, animateScroll } from "react-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { isAuthenticated, userInfo } from '../auth/authUtilities';

const NavBar = (props) => {
  const { name, role } = isAuthenticated() ? userInfo() : '';
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const history = useHistory()
  const location = useLocation();

  const logoOnClick = () => {
    location.pathname === '/' ?
    animateScroll.scrollToTop() : history.push('/');
  }

  return (
    <Navbar
      className="navbar__container"
      color='light'
      light
      expand="md"
    >
      <div className="container">
        <NavbarBrand className="navbar__logo" onClick={logoOnClick}>
          <img src="/assets/images/logo.png" className="w-md-50" alt="Logo" />
        </NavbarBrand>
        <NavbarToggler className="navbar__collapse__button" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="d-flex justify-content-md-end mt-md-0 mt-4 text-center navbar__item__container"
            style={{ flex: 1 }}
            navbar
          >
            {
              location.pathname === '/' &&
              <>
                <NavItem>
                  <NavLink style={{cursor:'pointer'}}>
                  <Link to='home' smooth={true} duration={500} exact='true' offset={-70} spy={true}>home</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{cursor:'pointer'}}>
                  <Link to='about' smooth={true} duration={500} exact='true' offset={-70} spy={true}>about</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{cursor:'pointer'}}>
                  <Link to='service' smooth={true} duration={500} exact='true' offset={-70} spy={true}>service</Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{cursor:'pointer'}}>
                    <Link to='contact' smooth={true} duration={500} exact='true' offset={-70} spy={true}>contact</Link>
                  </NavLink>
                </NavItem>
              </>
            }
            {
              isAuthenticated() ?
              (
                location.pathname.startsWith(`/${role}/dashboard`) ? '':
              <NavItem>
                <NavLink style={{cursor:'pointer'}}>
                  <Link onClick={()=>history.push(`/${role}/dashboard`)} style={{cursor:'pointer'}}> { role === 'user' ? 'Dashboard':'Admin Panel' } </Link>
                </NavLink>
              </NavItem>
            ) :''
            }
            {
              isAuthenticated() ? 
              (
                location.pathname.startsWith(`/${role}/dashboard`) ? <h3>{name}</h3> : <span className='navbar-user-name-icon'>{name.trim().toUpperCase()[0]}</span>
              )
              :
              <NavItem>
              <NavLink style={{cursor:'pointer'}}>
                <button className="primary-btn-small" onClick={()=>history.push('/login')}>Login</button>
              </NavLink>
            </NavItem>
            }
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
