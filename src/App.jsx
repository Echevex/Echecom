import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FondoRojo from './assets/FondoRojo.jpg';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import CardsContainer from './components/CardsContainer.jsx';
import Footer from './components/Footer.jsx';



const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${FondoRojo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <Hero />
      <CardsContainer />
      <Footer/>
    
    
      <main style={{ flex: 1 }}>
        {
        }
      </main>
    </div>
  );
};

export default App;
