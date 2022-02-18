// import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../images/logo.png';
import Nav from '../Nav';

export default function Header() {
    return (
        <div className="header__wrap">
            <div className="header">
                <div className="logo">
                    <Link to="/browse">
                        <img src={Logo} alt="Brand logo"/>
                    </Link>
                </div>
                <Nav />
            </div>
        </div>
    )
}
