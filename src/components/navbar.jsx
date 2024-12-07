import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="navbar__menu">
        <ul>
          <li><a href="/inicio">Inicio</a></li>
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

