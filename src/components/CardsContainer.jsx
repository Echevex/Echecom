import React from 'react';
import Card from './Card';
import Card1Image from '../assets/Card1.jpg'; // Ajusta la ruta según la ubicación
import Card2Image from '../assets/Card2.jpg';

const CardsContainer = () => {
  return (
    <div className="cards-container">
      <div className="card-left">
        <Card 
          image={Card1Image} 
          text="Elige tu diseño favorito con nuestras prendas" 
          buttonText="Ver Shorts" 
          buttonLink="/catalogo/Short" // Cambiado el enlace a la categoría "Shorts"
        />
      </div>
      <div className="card-right">
        <Card 
          image={Card2Image} 
          text="Una gama amplia de remeras" 
          buttonText="Ver Remeras" 
          buttonLink="/catalogo/Remera" // Cambiado el enlace a la categoría "Remeras"
        />
      </div>
    </div>
  );
};

export default CardsContainer;
