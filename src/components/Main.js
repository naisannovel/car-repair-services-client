import React from 'react';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Body from './Body/Body';
import Dashboard from './dashboard/Dashboard';
import NavBar from './Header/NavBar';
import { Route,Switch } from 'react-router-dom';

const Main = () => {
    return (
        <div>

            <NavBar/>
            <Switch>
            <Route path='/' exact component={Body} />
            <Route path='/login' exact component={Login} />
            <Route path='/signup' exact component={Signup} />
            {/* <Dashboard/> */}
            </Switch>
        </div>
    );
};

export default Main;