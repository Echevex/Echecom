import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Agregamos useNavigate
import "./navbar.css";
import logo from "../assets/logo.png";

// Función para buscar productos en el localStorage
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
  const navigate = useNavigate(); // Inicializamos el hook useNavigate

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

  // Manejar el clic en un artículo de la lista de sugerencias
  const handleSelectItem = (name) => {
    setSearchTerm(name);
    setFilteredItems([]);
  };

  // Función para manejar la búsqueda y redirigir a la página del detalle
  const handleSearch = () => {
    const items = JSON.parse(localStorage.getItem("products")) || []; // Corregimos el nombre a "products"
    const selectedItem = items.find(
      (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (selectedItem) {
      // Redirigir a la página de detalle usando el id del artículo
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

          {filteredItems.length > 0 && (
            <ul className="autocomplete-list">
              {filteredItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleSelectItem(item.name)}
                  className="autocomplete-item"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className="navbar__menu__list">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/Item">Catálogo</a>
          </li>
          <li>
            <a href="/Contact">Contacto</a>
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
