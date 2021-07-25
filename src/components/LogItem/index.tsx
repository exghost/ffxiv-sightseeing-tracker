import React, { useState } from 'react';

import './styles.css';

import { getWeatherImg } from 'api/weatherImgs';

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
                <ul className="log-item__body">
                    <li
                     className="log-item__body--emote log-item__body--item"
                    >
                        <span className="log-item__body--label log-item__body__emote--label"> 
                            Emote:
                        </span>
                        <span className="log-item__body--content log-item__body__emote--content">
                            {data.emote}
                        </span>
                    </li>
                    <li
                     className="log-item__body--time log-item__body--item"
                    >
                        <span className="log-item__body--label log-item__body__time--label"> 
                            Time:
                        </span>
                        <span className="log-item__body--content log-item__body__time--content">
                            {`${data.startTime.toString()}:00 - ${data.endTime.toString()}:00`}
                        </span>
                    </li>
                    <li
                     className="log-item__body--weather log-item__body--item"
                    >
                        <span className="log-item__body--label log-item__body__weather--label"> 
                            Weather:
                        </span>
                        <span className="log-item__body--content log-item__body__weather--content">
                            {
                                data.weather.map((weather: string): JSX.Element => {
                                    let weatherImg = getWeatherImg(weather);
                                    if(weatherImg) {
                                        return (
                                            <img
                                                key={weather}
                                                src={weatherImg}
                                                className="log-item__body--weather-image"
                                                alt={weather}
                                            />
                                        );
                                    } else {
                                        return <></>;
                                    }
                                })
                            }
                        </span>
                    </li>
                    <li
                     className="log-item__body--notes log-item__body--item"
                    >
                        <span className="log-item__body--label log-item__body__notes--label"> 
                            Notes:
                        </span>
                        <span className="log-item__body--content log-item__body__notes--content">
                            {data.comment}
                        </span>
                    </li>
                </ul>
            }
        </div>
    )
}

export default LogItem;