import React from 'react';
import './TempleCard.css';

const TempleCard = ({ title, imgSrc, brief, contact }) => {
  return (
    <div className="temple-card">
      <img src={imgSrc} alt={title} className="temple-image" />
      <div className="temple-info">
        <h3>{title}</h3>
        <p>{brief}</p>
        <a href={`tel:${contact}`} className="book-btn">Book Darshan: {contact}</a>
      </div>
    </div>
  );
};

export default TempleCard;
