import React from "react";
import './footer.css';
import { Link } from "react-router-dom"; // Importar Link para navegación interna
import fb from '../assets/fb.png';
import x from '../assets/x.png';
import instagram from '../assets/instagram.png';
import tiktok from '../assets/tiktok.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>Links Rápidos</h4>
            <Link to="/catalogo/Buzo">
              <p>Buzos</p>
            </Link>
            <Link to="/catalogo/Remera">
              <p>Remeras</p>
            </Link>
            <Link to="/catalogo/Pantalon">
              <p>Pantalones</p>
            </Link>
            <Link to="/catalogo/Short">
              <p>Shorts</p>
            </Link>
          </div>
          <div className="sb__footer-links-div">
            <h4>Acerca de Nosotros</h4>
            <Link to="/contact">
              <p>Contáctanos</p>
            </Link>
            <Link to="/about-us">
              <p>Términos y condiciones</p>
            </Link>
            <Link to="/about-us">
              <p>Política de Privacidad</p>
            </Link>
          </div>
          <div className="sb__footer-links-div">
            <h4>Únete</h4>
            <Link to="/register">
              <p>Ventajas al unirte</p>
            </Link>
            <Link to="/register">
              <p>Recibe todas las novedades</p>
            </Link>
          </div>
          <div className="sb__footer-links-div">
            <h4>Próximamente en</h4>
            <div className="socialmedia">
              <p><img src={fb} alt="Facebook" /></p>
              <p><img src={x} alt="X" /></p>
              <p><img src={instagram} alt="Instagram" /></p>
              <p><img src={tiktok} alt="TikTok" /></p>
            </div>
          </div>
        </div>

        <hr />

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} ECHECLOT. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
