import React from "react";
import '../App.css';
import HeroSection from "./HeroSection";
import Cards from "./Cards";
import About from "./About";
import PriceList from "./PriceList";
import Footer from "./Footer"

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <About />
            <PriceList />
            <Footer />
        </>
    )
} export default Home;