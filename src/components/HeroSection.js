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
    const [selectedTime, setSelectedTime] = useState(null);
    const [elementsVisible, setElementsVisible] = useState(true);
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

    const handleButtonClick = () => {
        window.location.href = '/termine';
    };

    const handleDayClick = (date) => {
        // Set the selected date
        setSelectedDate(date);

        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const isFriday = date.getDay() === 5;


        if (!isWeekend) {
            const openingHour = isFriday ? 9 : 8;
            const closingHour = isFriday ? 14 : 17;

            // Generate available time slots (for example, from 9:00 to 17:00 with 15-minute intervals)
            const startTime = new Date(date);
            startTime.setHours(openingHour, 0, 0, 0); // 9:00 AM
            const endTime = new Date(date);
            endTime.setHours(closingHour, 0, 0, 0);
            endTime.setMinutes(endTime.getMinutes() - 30); // 16:30 PM

            const slots = [];
            let currentTime = new Date(startTime);

            while (currentTime <= endTime) {
                slots.push(new Date(currentTime));
                currentTime.setMinutes(currentTime.getMinutes() + 30);
            }

            setAvailableTimeSlots(slots);
        } else {
            setAvailableTimeSlots([]);
        }
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
        setElementsVisible(false);
    };

    const maxSelectableDate = new Date();
    maxSelectableDate.setMonth(maxSelectableDate.getMonth() + 2);
    maxSelectableDate.setDate(0)

    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            {!isTerminePage ? (
                <>
                    <h1>Seiten nicht frisch?</h1>
                    <p>Kein Problem!</p>
                    <div className="hero-btn">
                        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'
                                onClick={handleButtonClick}>
                            <b>BUCHE JETZT DEINEN TERMIN</b>
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    {elementsVisible ? (
                        <>
                            <ReactCalendar
                                minDate={new Date()}
                                maxDate={maxSelectableDate}
                                className='react-calendar p-2'
                                view='month'
                                onClickDay={handleDayClick}
                            />
                            {selectedDate && (
                                <div className='time-slot-wrapper'>
                                    <h2>Termine für den {selectedDate.toLocaleDateString()}</h2>
                                    <div className="time-slot-container">
                                        {availableTimeSlots.map((slot) => (
                                            <TimeSlotCard key={slot.toISOString()} time={slot}
                                                          onClick={(time) => handleTimeClick(time)}/>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className='form-wrapper'>
                            <form className='input-form'>
                                <h2>Termin für den {selectedDate.toLocaleDateString()}</h2>
                                <h2 style={{ marginBottom: '20px' }}>um {selectedTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</h2>
                                <label id='name'>Name</label>
                                <input type='text' name='name' style={{ marginBottom: '10px' }} required/>
                                <label id='email'>E-Mail</label>
                                <input type='email' name='email' style={{ marginBottom: '10px' }} required/>
                                <label id='phone'>Telefonnummer</label>
                                <input type='tel' name='phone' style={{ marginBottom: '10px' }} required/>
                                <label id='message'>Nachricht</label>
                                <textarea name='message' style={{ marginBottom: '10px' }} placeholder='(optional)' required/>
                                <button className='input-btn'>
                                    <b>TERMIN BUCHEN</b>
                                </button>
                            </form>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default HeroSection;