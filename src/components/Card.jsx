import React from 'react';
import './card.css';

const Card = ({ image, text, buttonText, buttonLink }) => {
  return (
    <div className="card">
      <img src={image} alt="Card Background" className="card__image" />
      <div className="card__content">
        <h2 className="card__text">{text}</h2>
        <a href={buttonLink} className="card__button">{buttonText}</a>
      </div>
    </div>
  );
};

export default Card;
