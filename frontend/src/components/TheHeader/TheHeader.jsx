import '../../styles/layout/theHeader.scss';
import { useState } from "react";
import logo from '../../assets/TheHeader/logotipoo.svg';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

const TheHeader = () => {
    
    const [showInput, setShowInput] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => {
        setShowInput((prev) => !prev);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="theheader">
            <div className="theheader__container">
                <div className="theheader__top">
                    <div className="theheader__logo">
                        <img src={logo} alt="Logo" className="theheader__logo-img" />
                    </div>
                    <button 
                        className="theheader__hamburger" 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <nav className={`theheader__nav ${isMenuOpen ? 'theheader__nav--open' : ''}`}>
                    <ul className="theheader__nav-list">
                        <li className="theheader__nav-item">
                            <a href="#servicios" className="theheader__servicios" onClick={() => setIsMenuOpen(false)}>
                                <p>Servicios</p>
                            </a>
                        </li>
                        <li className="theheader__nav-item">
                            <a href="#productos" className="theheader__productos" onClick={() => setIsMenuOpen(false)}>
                                <p>Productos</p>
                            </a>
                        </li>
                        <li className="theheader__nav-item">
                            <a href="#administracionPublica" className="theheader__administracionPublica" onClick={() => setIsMenuOpen(false)}>
                                <p>Administración Pública</p>
                            </a>
                        </li>
                        <li className="theheader__nav-item">
                            <a href="#conocenos" className="theheader__conocenos" onClick={() => setIsMenuOpen(false)}>
                                <p>Conócenos</p>
                            </a>
                        </li>
                        <li className="theheader__nav-item">
                            <a href="#actualidad" className="theheader__actualidad" onClick={() => setIsMenuOpen(false)}>
                                <p>Actualidad</p>
                            </a>
                        </li>
                        <li>
                            <button className="contactar__button" onClick={() => setIsMenuOpen(false)}>Contactar</button>
                        </li>
                        <li>
                            <button className="tienda__button" onClick={() => setIsMenuOpen(false)}>
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