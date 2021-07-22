import React, { useEffect, useState } from 'react';
import EorzeaTime from 'eorzea-time';

import './EorzeaClock.css';

const getFormattedTime = () : String => {
    let time = new EorzeaTime();
    let hours = time.getHours();    
    let minutes = `0${time.getMinutes()}`.slice(-2);
    return `${hours}:${minutes}`;
};

function EorzeaClock() {
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
        <div className="eorzea-clock">
            <span className="eorzea-clock__text">Eorzea</span>
            <span className="eorzea-clock__time">{currentTime}</span>
        </div>
    )
}

export default EorzeaClock;