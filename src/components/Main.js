import React, { useEffect } from 'react';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import { Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { authCheck } from '../redux/authActionCreators';
import PrivateRoute from './protectedRoutes/PrivateRoute';

const mapDispatchToProps = dispatch =>{
    return {
        userAuthCheck: ()=> dispatch(authCheck())
    }
}

const Main = ({ userAuthCheck }) => {
    useEffect(()=>{
        userAuthCheck()
    },[])
    return (
        <div>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <PrivateRoute path='/dashboard'>
                <Dashboard/>
            </PrivateRoute>
            </Switch>
        </div>
    );
};

export default connect(null,mapDispatchToProps)(Main);