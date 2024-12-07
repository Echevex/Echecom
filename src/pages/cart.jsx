import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./cart.css";

const Carrito = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems); // Cargamos los artículos del carrito desde localStorage
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardamos el carrito actualizado
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div >
        
      <Navbar />
        <div className="carrito-container">
      <h1>Tu carrito</h1>
      <div className="carrito-list">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="carrito-item">
              <img src={item.image} alt={item.name} className="carrito-item-image" />
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
        </div>
      )}
      </div>
      <Footer />
    </div>
  );
};

export default Carrito;
