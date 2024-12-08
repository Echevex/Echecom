import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import "./item.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import { db } from "../services/firebase/index.js"; 
import { collection, getDocs, query, where } from "firebase/firestore";

const Items = () => {
  const { category } = useParams(); 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const collectionRef = category
          ? query(collection(db, "productos"), where("category", "==", category))
          : collection(db, "productos");

        const querySnapshot = await getDocs(collectionRef);
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(products);
      } catch (err) {
        console.error("Error al obtener los productos:", err);
        setError("Hubo un problema al cargar los productos. Intenta nuevamente más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  
  const formatCategoryName = (categoryName) => {
    return categoryName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  
  const handleCardClick = (id) => {
    navigate(`/detailItem/${id}`); 
  };

  return (
    <div className="items-container">
      <Navbar />
      <h1>
        {category
          ? `Productos de ${formatCategoryName(category)}`
          : "Todos los productos"}
      </h1>

      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="items-grid">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="card"
                onClick={() => handleCardClick(item.id)} 
                style={{ cursor: "pointer" }} 
              >
                <img src={item.img} alt={item.name} className="card-image" />
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p>Precio: ${item.price}</p>
                  <p>Categoría: {formatCategoryName(item.category)}</p>
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
      )}

      <Footer />
    </div>
  );
};

export default Items;
