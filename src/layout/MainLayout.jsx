import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Companies from '../components/Companies/Companies';
import Features from '../components/Features/Features';
import Hero2 from '../components/Hero2/Hero2';
import Hero3 from '../components/Hero3/Hero3';
import Hero4 from '../components/Hero4/Hero4';
import UseCases from '../components/UseCases/UseCases';

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
            <hr></hr>
            <Hero4></Hero4>
            <hr></hr>
            <UseCases></UseCases>
        </div>
    );
};

export default MainLayout;