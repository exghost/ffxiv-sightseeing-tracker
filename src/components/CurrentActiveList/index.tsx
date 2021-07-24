import React, { useEffect, useState } from 'react';
import EorzeaTime from 'eorzea-time';

import LogList from 'components/LogList';
import RoundedToggle from 'components/RoundedToggle';

import { getCurrentlyAvailableLogs } from 'api/sightseeingLogs';
import './styles.css';
import LogSection from 'components/LogSection';

function CurrentActiveList() {
    const [logData, setLogData] = useState<any[]>([]);
    const [currentHour, setCurrentHour] = useState(0);
    const [show20, setShow20] = useState(true);
    const [show60, setShow60] = useState(true);

    useEffect(() => {
        setInterval(() => {
            let hour = new EorzeaTime().getHours();
            if(hour !== currentHour) setCurrentHour(hour);
        }, 60000);
    }, [])

    useEffect(() => {
        let logData = getCurrentlyAvailableLogs();
        if(!show20) logData = logData.filter((log) => log.number > 20);
        if(!show60) logData = logData.filter((log) => !(log.number > 20 && log.number <= 80));

        setLogData(logData);
    }, [currentHour, show20, show60]);

    return (
        <div>
            <div className="current-active-list__options">
                <div className="current-active-list__options__show current-active-list__options__show20">
                    <RoundedToggle
                        id="show20"
                        isOn={show20}
                        handleToggle={() => setShow20(!show20)}
                    /> 
                    <span className="current-active-list__options__label">
                        Show first 20
                    </span>
                </div>
                <div className="current-active-list__options__show current-active-list__options__show60">
                    <RoundedToggle
                        id="show60"
                        isOn={show60}
                        handleToggle={() => setShow60(!show60)}
                    /> Show last 60
                </div>
                
            </div>
            <LogSection header="Currently Available" data={logData} />
        </div>
    )
}

export default CurrentActiveList;