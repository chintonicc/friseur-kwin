import React from "react";
import './HeroSection.css';

function TimeSlotCard({time}) {
    return (
        <div className="time-slot-card">
            {time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
        </div>
    )
}

export default TimeSlotCard;