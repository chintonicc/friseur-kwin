import React from "react";
import './HeroSection.css';

function TimeSlotCard({time, onClick}) {
    return (
        <div className="time-slot-card" onClick={() => onClick(time)}>
            {time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
        </div>
    )
}

export default TimeSlotCard;