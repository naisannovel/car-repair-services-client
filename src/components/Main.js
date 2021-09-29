import React, { useEffect, lazy, Suspense } from 'react';
import { Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { authCheck } from '../redux/authActionCreators';
import PrivateRoute from './protectedRoutes/PrivateRoute';
import { Redirect } from "react-router";
import Spinner from '../components/utilities/Spinner';

const Home = lazy(()=> import('./home/Home'));
const Login = lazy(()=> import('./authentication/Login'));
const Signup = lazy(()=> import('./authentication/Signup'));
const Dashboard = lazy(()=> import('./dashboard/Dashboard'))

const mapDispatchToProps = dispatch =>{
    return {
        userAuthCheck: ()=> dispatch(authCheck())
    }
}

const Main = ({userAuthCheck,googleLogin})=>{

  useEffect(()=>{
    userAuthCheck();
  },[])
    
        return (
        <Suspense fallback={<Spinner/>}>
            <Switch>
            <Route path='/' exact component={Home} />
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
        </Suspense>
    );
};

export default connect(null,mapDispatchToProps)(Main);