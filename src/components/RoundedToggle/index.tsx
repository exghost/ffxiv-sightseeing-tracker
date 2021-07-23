import React from 'react';

function RoundedToggle() {
    return (
        <>
            <input type="checkbox" className="toggle__checkbox" />
            <label className="toggle__label">
                <span className="toggle__slider"></span>
            </label>
        </>

    )
}

export default RoundedToggle;