import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Companies from '../components/Companies/Companies';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <hr></hr>
            <Hero></Hero>
            <hr></hr>
            <Companies></Companies>
            <hr></hr>
        </div>
    );
};

export default MainLayout;