import React from "react";
import "../../styles/NavbarStyle.css";

function Navbar() {
    function toggleMenu() {
        const menuOptions = document.getElementById('menuOptions');
        menuOptions.style.display = (menuOptions.style.display === 'block') ? 'none' : 'block';
    }


    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="menu">
                    <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
                    <ul className="menu-options" id="menuOptions">
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <a href="/" className="navbar-logo">Menstrual Flow Tracker</a>
                <li className="nav-item"><a href="/" className="nav-links">Home</a></li>
                <li className="nav-item"><a href="/" className="nav-links">About Us</a></li>
                <li className="nav-item"><a href="/" className="nav-links">Contact</a></li>
                {/*</ul>*/}
                {/*<ul className="nav-menu">*/}
            </div>
        </nav>
    );
}

export default Navbar;
