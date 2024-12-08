import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../services/firebase/index"; 
import { collection, getDocs, query, where } from "firebase/firestore";
import "./navbar.css";
import logo from "../assets/logo.png";

const fetchItemsFromFirebase = async (searchTerm = "") => {
  const productsRef = collection(db, "products"); 
  let q;

  if (searchTerm) {
    q = query(
      productsRef,
      where("name", ">=", searchTerm),
      where("name", "<=", searchTerm + "\uf8ff")
    );
  } else {
    q = query(productsRef);
  }

  const querySnapshot = await getDocs(q);
  const items = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return items;
};

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);
  const [showSubmenu, setShowSubmenu] = useState(false); 
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchItemsFromFirebase(searchTerm);
      setFilteredItems(products);
    };
    fetchData();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, [searchTerm]);


  const handleSearch = async () => {
    const products = await fetchItemsFromFirebase(searchTerm);
    setFilteredItems(products); 
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

        {filteredItems.length > 0 && (
          <ul className="navbar-search-results">
            {filteredItems.map((item) => (
              <li key={item.id}>
                <Link to={`/detailItem/${item.id}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

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
                  <Link to="/catalogo/Buzo">Buzos</Link>
                </li>
                <li>
                  <Link to="/catalogo/Remera">Remeras</Link>
                </li>
                <li>
                  <Link to="/catalogo/Pantalon">Pantalones</Link>
                </li>
                <li>
                  <Link to="/catalogo/Short">Shorts</Link>
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
