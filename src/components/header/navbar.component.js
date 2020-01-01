import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css';

const NavBar = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-items">
                    <Link to="/">Profile</Link>
                </li>
                <li className="nav-items">
                    <Link to="/menu">Change-Password</Link>
                </li>
                <li className="nav-items">
                    <Link to="/">Logout</Link>
                </li>
            </ul>
        </nav>
    )

}

export default NavBar;