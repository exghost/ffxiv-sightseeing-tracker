import React from 'react';

import './Header.css';

import EorzeaClock from 'components/EorzeaClock';

function Header() {
    return (
        <nav className="header">
            <div className="header__clock-container">
                <EorzeaClock />
            </div>
            <h1 className="heading header__heading">
                FFXIV Sightseeing Log Tracker
            </h1>
        </nav>
    )
}

export default Header;