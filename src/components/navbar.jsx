import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.png";

// Función para buscar productos
const buscarItems = (termino) => {
  const items = JSON.parse(localStorage.getItem("products")) || [];
  return items.filter((item) =>
    item.name.toLowerCase().includes(termino.toLowerCase())
  );
};

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);
  const [showSubmenu, setShowSubmenu] = useState(false); // Para controlar el submenú
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      const results = buscarItems(searchTerm);
      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, [searchTerm]);

  // Función para manejar la búsqueda
  const handleSearch = () => {
    const items = JSON.parse(localStorage.getItem("products")) || [];
    const selectedItem = items.find(
      (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (selectedItem) {
      navigate(`/detailItem/${selectedItem.id}`);
    } else {
      alert("Ítem no encontrado");
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="navbar__menu">
        <div className="navbar-search">
          <span className="navbar-search-icon">&#128269;</span>
          <input
            type="text"
            placeholder="Buscar"
            className="navbar-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span
            className="navbar-search-clear"
            onClick={() => setSearchTerm("")}
          >
            &#x2715;
          </span>
          <button onClick={handleSearch}>Buscar</button>
        </div>
        <ul className="navbar__menu__list">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li
            onMouseEnter={() => setShowSubmenu(true)}
            onMouseLeave={() => setShowSubmenu(false)}
            className="navbar__catalog"
          >
            <Link to="/catalogo">Catálogo</Link>
            {showSubmenu && (
              <ul className="navbar__submenu">
                <li>
                  <Link to="/catalogo/buzos">Buzos</Link>
                </li>
                <li>
                  <Link to="/catalogo/remeras">Remeras</Link>
                </li>
                <li>
                  <Link to="/catalogo/pantalones">Pantalones</Link>
                </li>
                <li>
                  <Link to="/catalogo/shorts">Shorts</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/carrito" className="navbar__cart">
              Carrito ({cartCount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
