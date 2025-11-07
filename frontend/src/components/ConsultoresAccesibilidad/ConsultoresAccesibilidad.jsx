import "../../styles/layout/consultoresAccesibilidad.scss";
import ilustracion from "../../assets/ConsultoresAccesibilidad/ConsultoresAccesibilidad.png";

const ConsultoresAccesibilidad = () => {
    return (
        <section className="consultores">
            <div className="consultores__container">
                <div className="consultores__rectangulo" />
                <div className="consultores__image">
                    <img src={ilustracion} alt="Ilustración accesibilidad universal" className="consultores__ilustracion"/>
                </div>

                <div className="consultores__content">
                    <h2>
                        Somos consultores en
                        Accesibilidad Universal
                    </h2>

                    <p>
                        Nuestro objetivo es que todas las personas puedan desenvolverse en
                        cualquier entorno con independencia y accedan a todos los recursos
                        del mismo con facilidad.
                    </p>

                    <p>
                        Mira cómo podemos ayudarte a transformar tu proyecto, cumplir con
                        las normativas y abrirlo a todas las personas.
                    </p>

                    <button className="consultores__button">Contacta con nosotros →</button>
                </div>
            </div>
        </section>
    );
};

export default ConsultoresAccesibilidad;