import React from 'react';
import './Card.css';

const Card = ({ chinese, english, flipped, onCardClick }) => {
    return (
        <div className="flip-card" onClick={onCardClick}>
        <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
          <div className="flip-card-front">
            <p>{chinese}</p>
          </div>
          <div className="flip-card-back">
            <p>{english}</p>
          </div>
        </div>
      </div>
  );
};

export default Card;
