import React from 'react';

import './styles.css';

function RoundedToggle({ id, isOn, handleToggle }: { id: string, isOn: boolean, handleToggle: any }) {
    return (
        <div className="toggle">
            <input 
                checked={isOn}
                onChange={handleToggle}
                type="checkbox" 
                className="toggle__checkbox" 
                id={id} 
            />
            <label className="toggle__label" htmlFor={id}>
                <span className="toggle__slider"></span>
            </label>
        </div>

    )
}

export default RoundedToggle;