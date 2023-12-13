import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {

    const location = useLocation();

  // Check if the current pathname is "/termine"
    const isTerminePage = location.pathname === '/termine';


    return (
        <div className="hero-container">
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            {!isTerminePage ? (
                <>
                <h1>Seiten nicht frisch?</h1>
                <p>Kein Problem!</p>
                <div className="hero-btn">
                    <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                        <b>BUCHE JETZT DEINEN TERMIN</b>
                    </Button>
                </div>
                </>
            ) : null}
        </div>
    );
}

export default HeroSection;