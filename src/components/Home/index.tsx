import React, { useEffect } from 'react';

import { getAllLogs } from 'api/sightseeingLogs';

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
            Home
        </div>
    )
}

export default Home;