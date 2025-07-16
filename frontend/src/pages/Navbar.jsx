import React, { useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/Temple logo.svg';

const Navbar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,gu,ta,te,bn,mr,pa',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };
  }, []);

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
        <div id="google_translate_element"></div>
        <a href="tel:+918858855308" className="call-icon" title="Call Us">📞</a>
      </div>
    </nav>
  );
};

export default Navbar;
