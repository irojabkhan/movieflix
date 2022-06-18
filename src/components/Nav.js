
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    const [isMobile, setIsMobile] = useState(false);
    
    return (
        <div className='nav'>
            <button className='mobile__nav__toggler' onClick={() => setIsMobile(value => !value)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            <ul className={isMobile ? 'show' : ''}>
                <li>
                    <Link to="/trending">Trending</Link>
                </li>
                <li>
                    <Link to="/movie">Movies</Link>
                </li>
                <li>
                    <Link to="/tv">Series</Link>
                </li>
                <li>
                    <Link to="/upcoming">Upcoming</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;