import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Para obtener parámetros y redirigir
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
  const { category } = useParams(); // Obtenemos la categoría desde la URL
  const [items, setItems] = useState([]);
  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    initializeProducts();
    const storedProducts = loadProductsFromLocalStorage();

    if (category) {
      // Filtramos los productos por la categoría si existe
      const filteredItems = storedProducts.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );

      setItems(filteredItems);
    } else {
      // Si no hay categoría, mostramos todos los productos
      setItems(storedProducts);
    }
  }, [category]); // Dependemos de la categoría para recargar los productos

  // Función para formatear la categoría (títulos amigables)
  const formatCategoryName = (categoryName) => {
    return categoryName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Manejar clic en una tarjeta para redirigir al detalle
  const handleCardClick = (id) => {
    navigate(`/detailItem/${id}`); // Redirigir al detalle del producto
  };

  return (
    <div className="items-container">
      <Navbar />
      <h1>
        {category
          ? `Productos de ${formatCategoryName(category)}`
          : "Todos los productos"}
      </h1>
      <div className="items-grid">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => handleCardClick(item.id)} // Redirigir al hacer clic
              style={{ cursor: "pointer" }} // Indicador visual de que es clicable
            >
              <img src={item.image} alt={item.name} className="card-image" />
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>Precio: {item.price}</p>
                <p>Categoría: {item.category}</p>
              </div>
            </div>
          ))
        ) : (
          <p>
            {category
              ? `No hay productos disponibles en la categoría "${formatCategoryName(
                  category
                )}".`
              : "No hay productos disponibles."}
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Items;
