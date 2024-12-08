import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase/index.js";
import { doc, getDoc } from "firebase/firestore";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./detailProduct.css"; // Importa el CSS con el nombre correcto

const DetailItem = () => {
  const { id } = useParams(); // Obtener el ID desde la URL
  const [item, setItem] = useState(null); // Estado para almacenar los detalles del producto
  const [loading, setLoading] = useState(true); // Estado para controlar el cargando

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "productos", id); // Referencia al documento en Firebase
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() }); // Guardar los datos del producto en el estado
        } else {
          console.error("No se encontró el producto");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false); // Finalizar el cargando
      }
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = () => {
    // Obtener el carrito actual desde localStorage o un array vacío si no existe
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Verificar si el producto ya existe en el carrito
    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, incrementar la cantidad
      existingProduct.quantity += 1;
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      cart.push({ ...item, quantity: 1 });
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Mostrar un mensaje o notificación (opcional)
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
            onClick={handleAddToCart} // Llamamos a la función al hacer clic
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
