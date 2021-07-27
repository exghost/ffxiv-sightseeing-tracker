import React, { useEffect, useState } from 'react';

import './Clock.css';



function Clock({ label, timeClass }: { label: string, timeClass: any }) {

    const getFormattedTime = () : string => {
        let time = new timeClass();
        let hours = time.getHours();    
        let minutes = `0${time.getMinutes()}`.slice(-2);
        return `${hours}:${minutes}`;
    };

    const [currentTime, setCurrentTime] = useState(getFormattedTime());



    useEffect(() => {
        let timer = setInterval(() => {
            setCurrentTime(getFormattedTime());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className="clock">
            <div className="clock__text">{label}</div>
            <div className="clock__time">{currentTime}</div>
        </div>
    )
}

export default Clock;