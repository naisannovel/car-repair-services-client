import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [navSticky, setNavSticky] = useState(false);

  var scrollPrev = window.pageYOffset;
  const scrollHandler = () => {
    var scrollCur = window.pageYOffset;
    if (scrollPrev > scrollCur) {
      setNavSticky(true);
    } else {
      setNavSticky(false);
    }
    scrollPrev = scrollCur;
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      className="navbar__container"
      style={{ position: navSticky ? "sticky" : "",top:navSticky?'0':''}}
      color="light"
      light
      expand="md"
    >
      <div className="container">
        <NavbarBrand className="navbar__logo" href="/">
          <img src="assets/images/logo.png" className="w-md-50" alt="Logo" />
        </NavbarBrand>
        <NavbarToggler className="navbar__collapse__button" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="d-flex justify-content-md-end mt-md-0 mt-4 text-center navbar__item__container"
            style={{ flex: 1 }}
            navbar
          >
            <NavItem>
              <NavLink href="#">
                home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                service
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                about
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <button className="primary-btn-small">Login</button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
