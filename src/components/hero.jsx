import React from 'react';
import './hero.css';
import Carru1 from '../assets/Carru1.jpg'; // Ajusta la ruta según la ubicación real

const Hero = () => {
  return (
    <div className="hero">
      <img src={Carru1} alt="Header" className="hero__image" />
      <div className="hero__overlay">
        <button className="hero__button">Ver más</button>
      </div>
    </div>
  );
};

export default Hero;
