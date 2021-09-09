import React from 'react';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import { Route,Switch } from 'react-router-dom';
import PrivateRoute from './privateRoute/PrivateRoute';

const Main = () => {
    return (
        <div>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            </Switch>
        </div>
    );
};

export default Main;