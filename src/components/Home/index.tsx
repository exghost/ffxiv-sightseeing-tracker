import React, { useEffect } from 'react';

import { getAllLogs } from 'api/sightseeingLogs';
import CurrentActiveList from 'components/CurrentActiveList';

function Home() {
    useEffect(() => {
        const getAll = async() => {
            let logs = await getAllLogs();
            console.log(logs);
        }
        getAll();
    }, []);

    return (
        <div>
            <CurrentActiveList />
        </div>
    )
}

export default Home;