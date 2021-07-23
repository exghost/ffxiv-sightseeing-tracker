import React, { useEffect, useState } from 'react';
import EorzeaTime from 'eorzea-time';

import { getCurrentlyAvailableLogs } from 'api/sightseeingLogs';
import './CurrentActiveList.css';

function CurrentActiveList() {
    const [logData, setLogData] = useState<any[]>([]);
    const [currentHour, setCurrentHour] = useState(0);

    useEffect(() => {
        setInterval(() => {
            let hour = new EorzeaTime().getHours();
            if(hour !== currentHour) setCurrentHour(hour);
        }, 60000);
    }, [])

    useEffect(() => {
        setLogData(getCurrentlyAvailableLogs());
    }, [currentHour]);

    return (
        <div>
        {
            !logData.length &&
            <div>
                No available sights to see...
            </div>
        }
        { logData.length &&
        <table className="current-active-list">
            <thead className="current-active-list__head">
                <tr className="current-active-list__head__row">
                    <td className="current-active-list__head__cell">
                        No.
                    </td>
                    <td className="current-active-list__head__cell">
                        Name
                    </td>
                    <td className="current-active-list__head__cell">
                        Zone
                    </td>
                    <td className="current-active-list__head__cell">
                        Coordinates
                    </td>
                    <td className="current-active-list__head__cell">
                        Emote
                    </td>
                    <td className="current-active-list__head__cell">
                        Weather
                    </td>
                    <td className="current-active-list__head__cell">
                        Time
                    </td>
                    <td className="current-active-list__head__cell">
                        Notes
                    </td>
                </tr>
            </thead>
            { logData.map((log) => (
                    <tr key={log.number} className="current-active-list__body__row">
                        <td className="current-active-list__body__cell">{log.number}</td>
                        <td className="current-active-list__body__cell">{log.name}</td>
                        <td className="current-active-list__body__cell">{log.zone}</td>
                        <td className="current-active-list__body__cell">{log.coords}</td>
                        <td className="current-active-list__body__cell">
                            {log.emote}
                        </td>
                        <td className="current-active-list__body__cell">{
                            log.weather.join(', ')
                        }</td>
                        <td className="current-active-list__body__cell"> 
                            {`${log.startTime.toString()} - ${log.endTime.toString()}`}
                        </td>
                        <td className="current-active-list__body__cell">
                            {log.comment}
                        </td>
                    </tr>
                ))
            }
        </table>
        }
        </div>
    )
}

export default CurrentActiveList;