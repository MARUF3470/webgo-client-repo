import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/pages/Footer/Footer';
import Header from '../component/pages/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;