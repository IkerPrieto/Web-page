import '../../styles/layout/main.scss';
import ilustracion from '../../assets/Main/Ilustracion.png';
import rectangulo from '../../assets/Main/Rectangle 4308.png';
import { MoveRight } from 'lucide-react';

const Main = () => {
    return (
        <main className="main">
            <div className="main__container">
                <div className="main__content">
                    <h1>¿Cumples con las normativas de accesibilidad universal?</h1>
                    <p>
                        Actualiza tu proyecto con accesibilidad en la información y lleva tu
                        mensaje a todas las personas.
                    </p>
                    <button className="main__btn">
                        <p>Contacta con nosotros</p>
                        <MoveRight className="main__arrow" size={20} />
                    </button>
                </div>

                <div className="main__image">
                    <img src={ilustracion} alt="Ilustracion" className="main__ilustracion__image" />
                    <img src={rectangulo} alt="Rectangulo" className="main__rectangulo__image" />
                </div>
            </div>
        </main>

    );
};

export default Main;
