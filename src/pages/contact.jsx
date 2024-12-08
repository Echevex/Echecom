import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("message", JSON.stringify(formData));
    console.log("Mensaje guardado en Local Storage:", formData);

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });


    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>Contacto</h1>
        <p>Puedes contactarnos llenando el formulario a continuación.</p>

     
        {isSubmitted && (
          <p className="confirmation-message">¡Tu mensaje ha sido enviado!</p>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
