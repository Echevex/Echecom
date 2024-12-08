import React from 'react';
import './hero.css';
import Carru1 from '../assets/Carru1.jpg'; // Ajusta la ruta según la ubicación real
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <img src={Carru1} alt="Header" className="hero__image" />
      <div className="hero__overlay">
        <Link to="/catalogo/Buzo">
          <button className="hero__button">Ver más</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
