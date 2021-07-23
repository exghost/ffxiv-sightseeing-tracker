import React from 'react';
import EorzeaTime from 'eorzea-time';

import './styles.css';

import Clock from 'components/Clock';

function Header() {
    return (
        <nav className="header">
            <h1 className="heading header__heading">
                FFXIV Sightseeing Tracker
            </h1>
            <div className="header__clock-container">
                <Clock label="Eorzea" timeClass={EorzeaTime} />
                <Clock label="Local" timeClass={Date} />
            </div>
        </nav>
    )
}

export default Header;