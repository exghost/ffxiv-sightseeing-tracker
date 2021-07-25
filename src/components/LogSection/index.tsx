import React from 'react';

import LogList from 'components/LogList';

import './styles.css';

type Props = {
    header: string,
    data: any[],
    children?: JSX.Element | JSX.Element[];
}

function LogSection(props: Props) {
    return (
        <div className="log-section">
            <h3 className="log-section__header">
                <span className="log-section__header__content">{ props.header }</span>
            </h3>
        { props.children &&
            <div className="log-section__filters">
                <h5 className="log-section__filters--header">Filters</h5>
                { props.children }
            </div>
        }
            
        {
            !props.data.length &&
            <div>
                No sights to see...
            </div>
        }
        { !!props.data.length &&
            <LogList data={props.data} />
        }
        </div>
    )
}

export default LogSection;