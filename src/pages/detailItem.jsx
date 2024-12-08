import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase/index.js";
import { doc, getDoc } from "firebase/firestore";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./detailProduct.css"; 

const DetailItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() }); 
        } else {
          console.error("No se encontró el producto");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = () => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    
    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
     
      existingProduct.quantity += 1;
    } else {
    1
      cart.push({ ...item, quantity: 1 });
    }

   
    localStorage.setItem("cart", JSON.stringify(cart));

    
    alert(`${item.name} ha sido agregado al carrito.`);
  };

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!item) {
    return <div className="error">El producto no fue encontrado.</div>;
  }

  return (
    <div className="detail-product">
      <Navbar />
      <div className="detail-product__container">
        <div className="detail-product__image">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="detail-product__info">
          <h1>{item.name}</h1>
          <p className="detail-product__description">{item.description}</p>
          <p className="detail-product__price">Precio: ${item.price}</p>
          <button 
            className="detail-product__add-to-cart" 
            onClick={handleAddToCart} 
          >
            Agregar al carrito
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailItem;
