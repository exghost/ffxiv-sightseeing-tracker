import React, { useState } from 'react';

import './styles.css';

function LogItem({ data }: { data: any }) {
    const [active, setActive] = useState(false);

    function toggleActive() {
        setActive(!active);
    }

    return (
        <div className="log-item">
            <div className="log-item__header" onClick={toggleActive}>
                <span className="log-item__header--number">{data.number}</span>
                <span className="log-item__header--name">{data.name}</span>
                <span className="log-item__header--location">
                    <span className="log-item__header--location__zone">{data.zone}</span> 
                    <span className="log-item__header--location__coords">{data.coords}</span>
                </span>

            </div>
            { active &&
                <ul>
                    <li>Emote: {data.emote}</li>
                    <li>Time: {`${data.startTime.toString()} - ${data.endTime.toString()}`} </li>
                    <li>Weather: {data.weather.join(', ')}</li>
                    <li>Notes: {data.comment}</li>
                </ul>
            }
        </div>
    )
}

export default LogItem;