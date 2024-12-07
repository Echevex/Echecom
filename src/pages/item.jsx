import React, { useEffect, useState } from "react";
import "./item.css"; 
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import { loadProductsFromLocalStorage, saveProductsToLocalStorage, products} from "../api/file";

const initializeProducts = () => {
  if (!localStorage.getItem("products")) {
    saveProductsToLocalStorage(products);
  }
};

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    initializeProducts();
    const storedProducts = loadProductsFromLocalStorage();
    setItems(storedProducts);
  }, []);

  return (
    <div className="items-container">
    <Navbar />
      <h1>Lista de Productos</h1>
      <div className="items-grid">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="card-image" />
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>Precio: {item.price}</p>
                <p>Categoría: {item.category}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
      
    <Footer />
    </div>
  );
};

export default Items;
