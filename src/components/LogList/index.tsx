import React from 'react';

import LogItem from 'components/LogItem';
import { SightseeingLog } from 'db/SightseeingData.types';

type Props = {
    data: SightseeingLog[]
}

function LogList(props: Props) {
    return (
        <ul className="log-list">
            { !!props.data?.length &&
                props.data.map((item) => (
                    <LogItem data={item} key={item.number} />
                ))
            }
        </ul>
    )
}

export default LogList;