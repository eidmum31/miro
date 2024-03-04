import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Companies from '../components/Companies/Companies';
import Features from '../components/Features/Features';
import Hero2 from '../components/Hero2/Hero2';
import Hero3 from '../components/Hero3/Hero3';

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
            <Hero2></Hero2>
            <hr></hr>
            <Hero3></Hero3>
        </div>
    );
};

export default MainLayout;