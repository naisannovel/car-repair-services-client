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
import { Link, useRouteMatch } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useHistory } from "react-router";
import PrivateRoute from "../protectedRoutes/PrivateRoute";
import AdminRoute from "../protectedRoutes/AdminRoute";

const Dashboard = () => {
  const { path } = useRouteMatch()
  const history = useHistory()
  return (
    <div className="sidebar__main__container">
      <div className="sidebar__nav__container">
        <Navbar style={{ width: "90%", margin: "0 auto" }}>
          <NavbarBrand onClick={()=>history.push('/')}>
            <img src={logo} className="w-md-50" style={{width:'85%',cursor:'pointer'}} alt="Logo" />
          </NavbarBrand>
          <NavbarText className="mr-auto" style={{ fontSize: "16px" }}>
            Simple Text
          </NavbarText>
        </Navbar>
      </div>
      <div class="sidebar__container">
        <div className="sidebar">
          <div class="sidebar__nav">
            <Link to={`${path}/my-appointment`}>
              <FontAwesomeIcon icon={faList} /> My Appointment
            </Link>
            <Link to={`${path}/take-appointment`}>
              {" "}
              <FontAwesomeIcon icon={faPlusSquare} /> Take Appointment
            </Link>
            <Link to={`${path}/give-feedback`}>
              {" "}
              <FontAwesomeIcon icon={faCommentDots} /> Give Feedback
            </Link>
            <Link to={`${path}/order-list`}>
              {" "}
              <FontAwesomeIcon icon={faList} /> Order List
            </Link>
            <Link to={`${path}/add-new-service`}>
              {" "}
              <FontAwesomeIcon icon={faPlusSquare} /> Add Services
            </Link>
            <Link to={`${path}/make-new-admin`}>
              {" "}
              <FontAwesomeIcon icon={faUserPlus} /> Make Admin
            </Link>
            <Link to={`${path}/manage-services`}>
              {" "}
              <FontAwesomeIcon icon={faThList} /> Manage Services
            </Link>
            <Link to='' className="sidebar__nav__last__child">
              {" "}
              <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
            </Link>
          </div>
        </div>
        <div className="sidebar__dashboard__routing">
          {/* user route */}
          <PrivateRoute path={`${path}/my-appointment`}>
            <MyAppointment/>
          </PrivateRoute>
          <PrivateRoute path={`${path}/take-appointment`}>
            <TakeAppointment/>
          </PrivateRoute>
          <PrivateRoute path={`${path}/give-feedback`}>
            <GiveFeedback/>
          </PrivateRoute>
          {/* <PrivateRoute path={`${path}`} exact>
            <MyAppointment/>
          </PrivateRoute> */}
          {/* admin route */}
          <AdminRoute path={`${path}/order-list`}>
            <OrderList/>
          </AdminRoute>
          <AdminRoute path={`${path}/make-new-admin`}>
            <MakeAdmin/>
          </AdminRoute>
          <AdminRoute path={`${path}/add-new-service`}>
            <AddService/>
          </AdminRoute>
          <AdminRoute path={`${path}/manage-services`}>
            <ManageService/>
          </AdminRoute>
          {/* <AdminRoute path={`${path}`} exact>
            <OrderList/>
          </AdminRoute> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
