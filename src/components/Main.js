import React from 'react';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Body from './Body/Body';
import Dashboard from './dashboard/Dashboard';
import { Route,Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute/PrivateRoute';

const Main = () => {
    return (
        <div>
            <Switch>
            <Route path='/' exact component={Body} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            </Switch>
        </div>
    );
};

export default Main;