import React, { useState } from 'react';

import LogList from 'components/LogList';

import './styles.css';
import { SightseeingLog } from 'db/SightseeingData.types';

type Props = {
    header: string,
    data: SightseeingLog[],
    children?: JSX.Element | JSX.Element[];
}

function LogSection(props: Props) {
    const baseFilterClass = 'log-section__filters--content';
    const hideFilterClass = 'log-section__filters--content--hidden';
    const [filterClasses, setFilterClasses] = useState(`${baseFilterClass} ${hideFilterClass}`);

    const toggleFilterClasses = () => {
        if(filterClasses === baseFilterClass) {
            setFilterClasses(`${baseFilterClass} ${hideFilterClass}`);
        } else {
            setFilterClasses(baseFilterClass);
        }
    }

    return (
        <div className="log-section">
            <div className="log-section__header">
                <h3 className="log-section__header__content">{ props.header }</h3>
            
            { props.children &&
                <div className="log-section__filters">
                    <h5 className="log-section__filters--header" onClick={toggleFilterClasses}>Filters</h5>
                    <div className={filterClasses}>
                        { props.children }
                    </div>
                </div>
            }
            </div>
            
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