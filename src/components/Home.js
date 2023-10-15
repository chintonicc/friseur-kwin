import React from "react";
import '../App.css';
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import About from "./About";
import Price from "./Price";

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <About />
            <Price />
        </>
    )
} export default Home;