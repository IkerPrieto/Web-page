import "../../styles/layout/theFooter.scss";

import bizkaia from "../../assets/TheFooter/Top/bizkaia.svg";
import bbva from "../../assets/TheFooter/Top/bbva.svg";
import alsa from "../../assets/TheFooter/Top/alsa.svg";
import bilbus from "../../assets/TheFooter/Top/bilbus.svg";
import bizkaibus from "../../assets/TheFooter/Top/bizkaibus.svg";
import villaMuseu from "../../assets/TheFooter/Top/villa-museu.svg";

import logotipo from "../../assets/TheFooter/Main/logotipo.svg";
import logos from "../../assets/TheFooter/Main/logos.svg";

import twitter from "../../assets/TheFooter/Bottom/twitter.svg";
import linkedin from "../../assets/TheFooter/Bottom/linkedin.svg";
import instagram from "../../assets/TheFooter/Bottom/instagram.svg";
import youtube from "../../assets/TheFooter/Bottom/youtube.svg";
import facebook from "../../assets/TheFooter/Bottom/facebook.svg";

const TheFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__clients">
                    <img src={bizkaia} alt="Bizkaia" />
                    <img src={bbva} alt="BBVA" />
                    <img src={alsa} alt="Alsa" />
                    <img src={bilbus} alt="Bilbus" />
                    <img src={bizkaibus} alt="Bizkaibus" />
                    <img src={villaMuseu} alt="Museu" />
                </div>
            </div>

            <div className="footer__main">
                <div className="footer__left">
                    <img src={logotipo} className="footer__logo" alt="Logotipo" />
                    <p className="footer__description">
                        Actualiza con nosotros tu proyecto con accesibilidad en la información y lleva tu mensaje a todas las personas
                    </p>
                    <button className="footer__button">Contactar →</button>

                    <div className="footer__logs">
                        <img src={logos} alt="Logos" />
                    </div>
                </div>

                <div className="footer__center">
                    <ul>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Administración pública</a></li>
                        <li><a href="#">Conócenos</a></li>
                        <li><a href="#">Actualidad</a></li>
                        <li><a href="#">Tienda</a></li>
                    </ul>
                </div>

                <div className="footer__right">
                    <h2>¿Quieres estar al día con las noticias de accesibilidad?</h2>
                    <p>Suscríbete a la newsletter</p>

                    <form className="newsletter">
                        <input type="text" placeholder="Nombre" className="name" />
                        <input type="email" placeholder="Email" className="email" />
                        <label>
                            <input type="checkbox" /> Acepto la política de privacidad
                        </label>
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
            </div>

            <div className="footer__bottom">
                <ul className="footer__links">
                    <li><p>© 2024 Puntodis</p></li>
                    <li><a href="#">Políticas de privacidad</a></li>
                    <li><a href="#">Aviso legal</a></li>
                    <li><a href="#">Política de cookies</a></li>
                </ul>

                <div className="footer__socials">
                    <a href="#" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="#" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="#" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="#" rel="noopener noreferrer">
                        <img src={youtube} alt="YouTube" />
                    </a>
                    <a href="#" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default TheFooter;