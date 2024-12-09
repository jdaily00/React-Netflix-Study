import React from 'react';
import './Nav.css'

export default function Nav() {
    return <nav className="nav-container">
        <img className="netflix-logo-img"
             src="/assets/images/netflix-logo.svg"
             alt="netflix-logo-image"
             onClick={() => window.location.reload()}/>
        <img className="user-proflie-img"
             src="/assets/images/netflix-avatar.png"
             alt="user-profile-image"/>
    </nav>
}