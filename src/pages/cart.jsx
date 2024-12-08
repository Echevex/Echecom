import React, { useEffect, useState } from "react";
import { db } from "../services/firebase"; 
import { doc, getDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";  // Usamos useNavigate para redirigir
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./cart.css";

const Carrito = () => {
  const [cart, setCart] = useState([]); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Usamos navigate para redirigir a la página de pago

  useEffect(() => {
    const fetchCartDetails = async () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

      const cartWithDetails = await Promise.all(
        cartItems.map(async (item) => {
          const docRef = doc(db, "productos", item.id); 
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            return {
              ...item, 
              ...docSnap.data()  
            };
          }
          return item;  
        })
      );

      setCart(cartWithDetails);
      setLoading(false);
    };

    fetchCartDetails();
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    navigate("/pago"); // Redirige a la página de pago
  };

  if (loading) {
    return <p>Cargando carrito...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="carrito-container">
        <h1>Tu carrito</h1>
        <div className="carrito-list">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="carrito-item">
                <img src={item.img} alt={item.name} className="carrito-item-image" />
                <div className="carrito-item-info">
                  <h3>{item.name}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.price}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                  <button onClick={() => handleRemove(item.id)}>Eliminar</button>
                </div>
              </div>
            ))
          ) : (
            <p>El carrito está vacío.</p>
          )}
        </div>
        {cart.length > 0 && (
          <div className="carrito-total">
            <h3>Total: ${getTotal()}</h3>
            <button onClick={handleCheckout}>Ir a pagar</button> {/* Botón de pago */}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Carrito;
