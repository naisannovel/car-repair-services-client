import React, { Component, useEffect } from 'react';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import MainHome from './home/MainHome';
import Dashboard from './dashboard/Dashboard';
import { Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { authCheck, googleAuth } from '../redux/authActionCreators';
import PrivateRoute from './protectedRoutes/PrivateRoute';
import { Redirect } from "react-router";

const mapDispatchToProps = dispatch =>{
    return {
        googleLogin: () => dispatch(googleAuth()),
        userAuthCheck: ()=> dispatch(authCheck())
    }
}

const Main = ({userAuthCheck,googleLogin})=>{

  useEffect(()=>{
    userAuthCheck();
  },[])
    
        return (
        <>
            <Switch>
            <Route path='/' exact component={MainHome} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <PrivateRoute path={`/user/dashboard`}>
                <Dashboard/>
            </PrivateRoute>
            <PrivateRoute path={`/admin/dashboard`}>
                <Dashboard/>
            </PrivateRoute>
            <Redirect to='/' />
            </Switch>
        </>
    );
};

export default connect(null,mapDispatchToProps)(Main);