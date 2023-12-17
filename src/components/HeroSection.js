import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import ReactCalendar from 'react-calendar';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import './Calendar.css'
import TimeSlotCard from "./TimeSlotCard";

function HeroSection() {

    const location = useLocation();

    // Check if the current pathname is "/termine"
    const isTerminePage = location.pathname === '/termine';

    const [selectedDate, setSelectedDate] = useState(null);
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

    const handleDayClick = (date, clickEvent) => {
        // Set the selected date
        clickEvent.preventDefault();
        setSelectedDate(date);

        // Generate available time slots (for example, from 9:00 to 17:00 with 15-minute intervals)
        const startTime = new Date(date);
        startTime.setHours(9, 0, 0, 0); // 9:00 AM
        const endTime = new Date(date);
        endTime.setHours(16, 30, 0, 0); // 16:30 PM

        const slots = [];
        let currentTime = new Date(startTime);

        while (currentTime <= endTime) {
            slots.push(new Date(currentTime));
            currentTime.setMinutes(currentTime.getMinutes() + 30);
        }

        setAvailableTimeSlots(slots);
    };

    return (
        <div className='hero-container'>
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
            ) : (
                <>
                    <ReactCalendar
                        minDate={new Date()}
                        className='react-calendar p-2'
                        view='month'
                        onClickDay={handleDayClick}
                    />
                    {selectedDate && (
                        <div className='time-slot-wrapper'>
                            <h2>Termine für den {selectedDate.toLocaleDateString()}</h2>
                            <div className="time-slot-container">
                                {availableTimeSlots.map((slot) => (
                                    <TimeSlotCard key={slot.toISOString()} time={slot}/>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default HeroSection;