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

    // Check if the current pathname is "/termine" or "/success"
    const isTerminePage = location.pathname === '/termine';
    const isSuccessPage = location.pathname === '/success';

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [elementsVisible, setElementsVisible] = useState(true);
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

    // redirect to pages

    function redirectHomePage() {
        window.location.href = '/';
    }

    const redirectTerminePage = () => {
        window.location.href = '/termine';
    };

    const redirectSuccessPage = () => {
        window.location.href = '/success';
    };

    const handleDayClick = async (date) => {
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

            // get date in YYYY-MM-DD format
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2); 
            const day = ('0' + date.getDate()).slice(-2);
            const formattedDate = `${year}-${month}-${day}`;
            let bookedAppointments = [];

            try {
                // send GET request to the /appointments endpoint
                const response = await fetch(`http://localhost:5000/appointments/${formattedDate}`);
                const appointments = await response.json();
                
                // get the booked appointments
                bookedAppointments = appointments.data;
            } catch (error) {
                console.error('Error:', error);
            }

            while (currentTime <= endTime) {
                // get time string in HH:MM format
                let hours = currentTime.getHours();
                let minutes = currentTime.getMinutes();

                // Pad the hours and minutes with leading zeros if necessary
                hours = hours < 10 ? '0' + hours : hours;
                minutes = minutes < 10 ? '0' + minutes : minutes;

                const currentTimeString = `${hours}:${minutes}`;
                const bookedTimes = bookedAppointments.map(appointment => appointment.time);

                // check if already booked
                if (!bookedTimes.includes(currentTimeString)) {
                    slots.push(new Date(currentTime));
                }
                
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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        // Add the selected date and time to the data
        data.date = selectedDate.toLocaleDateString('en-CA');
        data.time = selectedTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });

        // Send a POST request to the /appointments endpoint
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // If the request was successful, redirect to the success page
                console.log('Success:', data);
                redirectSuccessPage();
            } else {
                // If there was an error, log it to the console
                console.error('Error:', data.error);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    // set max selectable date to 2 months from now
    const maxSelectableDate = new Date();
    maxSelectableDate.setMonth(maxSelectableDate.getMonth() + 2);
    maxSelectableDate.setDate(0)

    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            {!isTerminePage && !isSuccessPage ? (
                <>
                    <h1>Seiten nicht frisch?</h1>
                    <p>Kein Problem!</p>
                    <div className="hero-btn">
                        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'
                                onClick={redirectTerminePage}>
                            <b>BUCHE JETZT DEINEN TERMIN</b>
                        </Button>
                    </div>
                </>
            ) : (
                isTerminePage ? (
                    elementsVisible ? (
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
                            <form className='input-form' onSubmit={handleFormSubmit}>
                                <h2>Termin für den {selectedDate.toLocaleDateString()}</h2>
                                <h2 style={{marginBottom: '20px'}}>um {selectedTime.toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}</h2>
                                <label id='name'>Name</label>
                                <input type='text' name='name' style={{marginBottom: '10px'}} required/>
                                <label id='email'>E-Mail</label>
                                <input type='email' name='email' style={{marginBottom: '10px'}} required/>
                                <label id='phone'>Telefonnummer</label>
                                <input type='tel' name='phone' style={{marginBottom: '10px'}} required/>
                                <label id='message'>Nachricht</label>
                                <textarea name='message' style={{marginBottom: '10px'}} placeholder='(optional)'/>
                                <button className='input-btn'>
                                    <b>TERMIN BUCHEN</b>
                                </button>
                            </form>
                        </div>
                    )
                ) : (
                    <div className='form-wrapper'>
                        <h2 style={{marginBottom: '10px'}}>Ihre Buchung war erfolgreich.</h2>
                        <p>Sie erhalten in Kürze eine Bestätigungs-Mail.</p>
                        <button className='input-btn' onClick={redirectHomePage}>
                            <b>ZURÜCK ZUR STARTSEITE</b>
                        </button>
                    </div>
                )
            )}
        </div>
    );
}

export default HeroSection;