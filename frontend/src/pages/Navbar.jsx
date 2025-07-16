import React from 'react';
import './Navbar.css';
import logo from '../assets/Temple logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Company Logo" className="logo" />
        <div className="company-info">
          <h2 className="company-name">Mannka</h2>
          <p className="tagline">Giving Local Experience</p>
        </div>
      </div>

      <div className="navbar-right">
        <select className="language-select">
          <option>EN</option>
          <option>HI</option>
        </select>
        <a href="tel:+918858855308" className="call-icon" title="Call Us">📞</a>
      </div>
    </nav>
  );
};

export default Navbar;
