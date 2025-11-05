import '../../styles/layout/theheader.scss';
import { useState } from "react";
import logo from '../../assets/TheHeader/logotipoo.svg';
import { ShoppingCart, Search } from 'lucide-react';

const TheHeader = () => {
    
    const [showInput, setShowInput] = useState(false);

    const handleToggle = () => {
        setShowInput((prev) => !prev);
    };

    return (
        <header className="theheader">
            <div className="theheader__container">
                <div className="theheader__logo">
                    <img src={logo} alt="Logo" className="theheader__logo-img" />
                </div>
                <nav className="theheader__nav">
                    <ul className="theheader__nav-list">
                        <li className="theheader__nav-item">
                            <a href="#servicios" className="theheader__servicios">
                                <p>Servicios</p>
                            </a>
                        </li>
                        <li className="theheader__nav-item">
                            <a href="#productos" className="theheader__productos">
                                <p>Productos</p>
                            </a>
                        </li>
                        <li className="theheader__nav-item">
                            <a href="#administracionPublica" className="theheader__administracionPublica">
                                <p>Administración Pública</p>
                            </a>
                        </li>
                        <li className="theheader__nav-item">
                            <a href="#conocenos" className="theheader__conocenos">
                                <p>Conócenos</p>
                            </a>
                        </li>
                        <li className="theheader__nav-item">
                            <a href="#actualidad" className="theheader__actualidad">
                                <p>Actualidad</p>
                            </a>
                        </li>
                        <li>
                            <button className="contactar__button">Contactar</button>
                        </li>
                        <li>
                            <button className="tienda__button">
                                <ShoppingCart className="cart__icon" size={20} />
                                <p>Tienda</p>
                            </button>
                        </li>
                        <li>
                            <div className="search__container">
                                <Search
                                    className="search__icon cursor-pointer"
                                    size={20}
                                    onClick={handleToggle}
                                />
                                {showInput && (
                                    <input
                                        type="text"
                                        className="search__input"
                                        autoFocus
                                    />
                                )}
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default TheHeader;