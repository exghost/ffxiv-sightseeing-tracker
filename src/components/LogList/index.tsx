import LogItem from 'components/LogItem';
import React from 'react';

function LogList(props: any) {
    return (
        <ul className="log-list">
            { !!props.data?.length &&
                props.data.map((item: any) => (
                    <LogItem data={item} />
                ))
            }
        </ul>
    )
}

export default LogList;