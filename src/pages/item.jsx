import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Para obtener los parámetros de la URL
import "./item.css"; 
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import { loadProductsFromLocalStorage, saveProductsToLocalStorage, products } from "../api/file";

const initializeProducts = () => {
  if (!localStorage.getItem("products")) {
    saveProductsToLocalStorage(products);
  }
};

const Items = () => {
  const { category } = useParams();  // Obtenemos la categoría desde la URL
  const [items, setItems] = useState([]);

  useEffect(() => {
    initializeProducts();
    const storedProducts = loadProductsFromLocalStorage();

    if (category) {
      // Filtramos los productos por la categoría si existe
      const filteredItems = storedProducts.filter((item) => item.category.toLowerCase() === category.toLowerCase());
      setItems(filteredItems);
    } else {
      // Si no hay categoría, mostramos todos los productos
      setItems(storedProducts);
    }
  }, [category]);  // Dependemos de la categoría para recargar los productos

  return (
    <div className="items-container">
      <Navbar />
      <h1>{category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : "Todos los productos"}</h1>
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
          <p>No hay productos disponibles en esta categoría.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Items;
