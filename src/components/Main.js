import React from 'react';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import NavBar from './Header/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Main;