import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Companies from '../components/Companies/Companies';
import Features from '../components/Features/Features';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <hr></hr>
            <Hero></Hero>
            <hr></hr>
            <Companies></Companies>
            <hr></hr>
            <Features></Features>
            <hr></hr>
        </div>
    );
};

export default MainLayout;