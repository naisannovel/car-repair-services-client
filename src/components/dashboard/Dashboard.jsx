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
import { Link, useRouteMatch } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useHistory } from "react-router";
import PrivateRoute from "../protectedRoutes/PrivateRoute";
import AdminRoute from "../protectedRoutes/AdminRoute";
import { isAuthenticated, logOut, userInfo } from "../authentication/authUtilities";

const Dashboard = () => {
  const { role, name } = isAuthenticated() ? userInfo() : "";
  const { path } = useRouteMatch();
  const history = useHistory();

  let dashboardSidebar = null;
  let dashboardRouting = null;

  if (isAuthenticated() && role === "user") {

    dashboardSidebar = (
      <>
        <Link to={`${path}/my-appointment`}>
          <FontAwesomeIcon icon={faList} /> My Appointment
        </Link>
        <Link to={`${path}/take-appointment`}>
          <FontAwesomeIcon icon={faPlusSquare} /> Take Appointment
        </Link>
        <Link to={`${path}/give-feedback`}>
          <FontAwesomeIcon icon={faCommentDots} /> Give Feedback
        </Link>
      </>
    );

    // user route
    dashboardRouting = (
      <>
        <PrivateRoute path={`${path}/my-appointment`} exact>
            <MyAppointment/>
          </PrivateRoute>
        <PrivateRoute path={`${path}/take-appointment`} exact>
          <TakeAppointment />
        </PrivateRoute>
        <PrivateRoute path={`${path}/give-feedback`} exact>
          <GiveFeedback />
        </PrivateRoute>
        <PrivateRoute path={`${path}`} exact>
            <MyAppointment/>
          </PrivateRoute>
      </>
    );

  } else if (isAuthenticated() && role === "admin") {

    dashboardSidebar = (
      <>
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
      </>
    );
    
    // admin route
    dashboardRouting = (
      <>
        <AdminRoute path={`${path}/order-list`} exact>
          <OrderList />
        </AdminRoute>
        <AdminRoute path={`${path}/make-new-admin`} exact>
          <MakeAdmin />
        </AdminRoute>
        <AdminRoute path={`${path}/add-new-service`} exact>
          <AddService />
        </AdminRoute>
        <AdminRoute path={`${path}/manage-services`} exact>
          <ManageService />
        </AdminRoute>
        <AdminRoute path={`${path}`} exact>
            <OrderList/>
          </AdminRoute>
      </>
    );
  }

  return (
    <div className="sidebar__main__container">
      <div className="sidebar__nav__container">
        <Navbar style={{ width: "90%", margin: "0 auto" }}>
          <NavbarBrand onClick={() => history.push("/")}>
            <img
              src={logo}
              className="w-md-50"
              style={{ width: "85%", cursor: "pointer" }}
              alt="Logo"
            />
          </NavbarBrand>
          <NavbarText
            className="mr-auto"
            style={{ fontSize: "20px", textTransform: "capitalize" }}
          >
            {name}
          </NavbarText>
        </Navbar>
      </div>
      <div class="sidebar__container">
        <div className="sidebar">
          <div class="sidebar__nav">
            {dashboardSidebar}
            <Link to="" className="sidebar__nav__last__child" onClick={logOut}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
            </Link>
          </div>
        </div>
        <div className="sidebar__dashboard__routing">{dashboardRouting}</div>
      </div>
    </div>
  );
};

export default Dashboard;
