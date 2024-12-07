import React from "react";
import './footer.css';
import fb from '../assets/fb.png'
import x from '../assets/x.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'

const Footer =() => {

return (
    <div className="footer">
        <div className="sb__footer section__padding">
            <div className="sb__footer-links">
                <div className="sb__footer-links-div">
                    <h4>Links Rapidos</h4>
                    < a href="/Remeras">
                       <p>Remeras</p>
                    </a>
                    < a href="/Buzos">
                       <p>Buzos</p>
                    </a>
                    < a href="/Pantalones">
                       <p>Pantalones</p>
                    </a>
                    < a href="/Shorts">
                       <p>Shorts</p>
                    </a>
                </div>
                <div className="sb__footer-links-div">
                    <h4>Acerca de Nosotros</h4>
                    < a href="/Contact">
                       <p>Contáctanos</p>
                    </a>
                    < a href="/AboutUs">
                       <p>Términos y condiciones</p>
                    </a>
                    < a href="/AboutUS">
                       <p>Política de Privacidad</p>
                    </a>
                </div>
                <div className="sb__footer-links-div">
                    <h4>Únete</h4>
                    < a href="/Regist">
                       <p>Ventajas al unirte</p>
                    </a>
                    < a href="/Regist">
                       <p>Recibi todas las novedades</p>
                    </a>
                </div>
                <div className="sb__footer-links-div">
                    <h4>Proximamente en</h4>
                    < div className="socialmedia">
                    <p><img src={fb} alt=""/></p>
                    <p><img src={x} alt=""/></p>
                    <p><img src={instagram} alt=""/></p>
                    <p><img src={tiktok} alt=""/></p>
                    </div>
                   
                </div>

            </div>

        <hr></hr>

        <div className="sb__footer-below">
            <div className="sb__footer-copyright">
                <p>
                    @{new Date().getFullYear()} ECHECLOT. Todos los derechos reservados.
                </p>

            </div>

        </div>

        </div>

    </div>

)

}

export default Footer;