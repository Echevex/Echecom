import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./pago.css";

const Pago = () => {
  const navigate = useNavigate(); // Usamos navigate para redirigir después de completar el pago
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    cardNumber: "",
    email: "",
  });
  const [showThanks, setShowThanks] = useState(false); // Mostrar mensaje de agradecimiento

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica de procesamiento de pago

    // Mostrar el mensaje de agradecimiento
    setShowThanks(true);

    // Después de 3 segundos, redirigimos a la página de inicio
    setTimeout(() => {
      navigate("/"); // Redirige a la página principal
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      <div className="pago-container">
        {showThanks ? (
          <div className="thanks-message">
            <h1>¡Gracias por tu compra!</h1>
          </div>
        ) : (
          <div className="pago-form">
            <h1>Formulario de pago</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Teléfono:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="address">Dirección de envío:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <label htmlFor="cardNumber">Número de tarjeta:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <button type="submit">Pagar</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Pago;
