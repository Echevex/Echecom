import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.png";

const buscarItems = (termino) => {
  const items = JSON.parse(localStorage.getItem("products")) || [];

  return items.filter((item) =>
    item.name.toLowerCase().includes(termino.toLowerCase())
  );
};

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const results = buscarItems(searchTerm);
      console.log(results);

      setFilteredItems(results);
    } else {
      setFilteredItems([]);
    }
  }, [searchTerm]);

  const handleSelectItem = (name) => {
    setSearchTerm(name);
    setFilteredItems([]);
  };

  const handleSearch = () => {
    const items = JSON.parse(localStorage.getItem("items")) || [];
    const selectedItem = items.find(
      (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (selectedItem) {
      alert(`El ID del ítem es: ${selectedItem.id}`);
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
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/Item">Catálogo</a>
          </li>
          <li>
            <a href="/novedades">Novedades</a>
          </li>
          <li>
            <a href="/sale">Sale</a>
          </li>
          <li>
            <a href="/carrito" className="navbar__cart">
              Carrito
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
