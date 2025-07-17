import React from 'react';
import './TempleCard.css';

const TempleCard = ({ title, imgSrc, brief, contact ,buttonLabel }) => {
  return (
    <div className="temple-card">
      <img src={imgSrc} alt={title} className="temple-image" />
      <div className="temple-info">
        <h3>{title}</h3>
        {Array.isArray(brief) ? (
          <div className="temple-brief">
            {brief.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        ) : (
        <p>{brief}</p>)}
        <a href={`tel:${contact}`} className="book-btn">{props.buttonLabel || "Book Darshan"}: {contact}</a>
      </div>
    </div>
  );
};

export default TempleCard;
