import React from 'react';
import EorzeaTime from 'eorzea-time';

import './Header.css';

import Clock from 'components/Clock';

function Header() {
    return (
        <nav className="header">
            <div className="header__clock-container">
                <Clock label="Eorzea" timeClass={EorzeaTime} />
                <Clock label="Local" timeClass={Date} />
            </div>
            <h1 className="heading header__heading">
                FFXIV Sightseeing Log Tracker
            </h1>
        </nav>
    )
}

export default Header;