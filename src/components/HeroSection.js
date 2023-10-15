import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            <h1>Seiten nicht frisch?</h1>
            <p>Kein Problem!</p>
            <div className="hero-btn">
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    <b>BUCHE JETZT DEINEN TERMIN</b>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;