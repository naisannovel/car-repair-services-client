import React from 'react';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Body from './Body/Body';
import Sidebar from './dashboard/Sidebar';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import NavBar from './Header/NavBar';

const Main = () => {
    return (
        <div>
            {/* <NavBar/> */}
            {/* <Header/>
            <Body/>
            <Footer/> */}
            {/* <Login/> */}
            {/* <Signup/> */}
            <Sidebar/>
        </div>
    );
};

export default Main;