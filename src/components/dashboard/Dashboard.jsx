import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faPlusSquare,
  faUserPlus,
  faThList,
  faSignOutAlt,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import MyAppointment from "./user/MyAppointment";
import TakeAppointment from "./user/TakeAppointment";
import GiveFeedback from "./user/GiveFeedback";
import OrderList from "./admin/OrderList";
import MakeAdmin from "./admin/MakeAdmin";
import AddService from "./admin/AddService";
import ManageService from "./admin/ManageService";

const Dashboard = () => {
  return (
    <div className="sidebar__main__container">
      <div className="sidebar__nav__container">
        <Navbar style={{ width: "90%", margin: "0 auto" }}>
          <NavbarBrand href="/">
            <img src="assets/images/logo.png" className="w-md-50" alt="Logo" />
          </NavbarBrand>
          <NavbarText className="mr-auto" style={{ fontSize: "16px" }}>
            Simple Text
          </NavbarText>
        </Navbar>
      </div>
      <div class="sidebar__container">
        <div className="sidebar">
          <div class="sidebar__nav">
            <a href="#">
              <FontAwesomeIcon icon={faList} /> My Appointment
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faPlusSquare} /> Take Appointment
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faCommentDots} /> Give Feedback
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faList} /> Order List
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faPlusSquare} /> Add Services
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faUserPlus} /> Make Admin
            </a>
            <a href="#">
              {" "}
              <FontAwesomeIcon icon={faThList} /> Manage Services
            </a>
            <a href="#" className="sidebar__nav__last__child">
              {" "}
              <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
            </a>
          </div>
        </div>
        <div className="sidebar__dashboard__routing">
          {/* <MyAppointment/> */}
          {/* <TakeAppointment/> */}
          {/* <GiveFeedback/> */}
          {/* <OrderList/> */}
          {/* <MakeAdmin/> */}
          {/* <AddService/> */}
          <ManageService/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
