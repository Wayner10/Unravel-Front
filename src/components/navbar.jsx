import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="left">
                <div className="logo">Logo</div>
                <div className="brand">unravel</div>
            </div>
            <div className="right">
                <Link to='/home'>Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/regions">Regions</Link>
                <Link to="/places">Places</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/users">Users</Link>
                <Link to='/about'>About</Link>
            </div>
        </nav>
    );
}

export default Navbar;
