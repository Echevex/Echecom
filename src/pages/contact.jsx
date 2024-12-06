import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <p>Puedes contactarnos llenando el formulario a continuación.</p>
      <form>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
