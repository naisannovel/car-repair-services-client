import React from 'react';
import Login from './authentication/Login';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import NavBar from './Header/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar/>
            {/* <Header/>
            <Body/>
            <Footer/> */}
            <Login/>
        </div>
    );
};

export default Main;