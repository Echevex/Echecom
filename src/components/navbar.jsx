import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
        
      </div>
      <nav className="navbar__menu">


      <div className="navbar-search">
        <span className="navbar-search-icon">&#128269;</span> {/* Lupa */}
        <input
          type="text"
          placeholder="Buscar"
          className="navbar-search-input"
        />
        <span className="navbar-search-clear">&#x2715;</span> {/* Cruz */}
      </div>

      
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/Item">Catalogo</a></li>
          <li><a href="/novedades">Novedades</a></li>
          <li><a href="/sale">Sale</a></li>
          <li><a href="/carrito" className="navbar__cart">Carrito</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

