import EorzeaTime from 'eorzea-time';
import EorzeaWeather from 'eorzea-weather';

import data from 'db/sightseeing_data';


export function getAllLogs(): any[] {
    return data.logs;
}

export function getCurrentlyAvailableLogs(): any[] {
    const time = new EorzeaTime();
    const hour = time.getHours();
    const logs = data.logs;

    const currentLogsByTime = logs.filter(({ startTime, endTime }) => {
        if(endTime > startTime) {
            return hour >= startTime && hour < endTime;
        } else {
            return hour >= startTime || hour < endTime;
        }
    });

    const currentLogsByTimeAndWeather = currentLogsByTime.filter(({ weatherZone, weather }) => {
        let currentWeather = EorzeaWeather.getWeather(weatherZone, new Date());
        console.log(weatherZone, currentWeather);

        return weather.includes(currentWeather);
    });

    return currentLogsByTimeAndWeather;
}

export function getUniqueTimes(): any[] {
    const logs = data.logs;

    const startTimes = logs.map((log) => log.startTime);
    const endTimes = logs.map((log) => log.endTime);

    const uniqueTimes = new Set([...startTimes, ...endTimes]);
    return Array.from(uniqueTimes);
}
