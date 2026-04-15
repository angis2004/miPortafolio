// src/components/Header.jsx
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('.navbar a');
    const handleClick = () => setIsMenuOpen(false);
    links.forEach((link) => link.addEventListener('click', handleClick));
    return () => {
      links.forEach((link) => link.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <header className="header">
      <a href="#home" className="logo">
        Angie <span>Ticllacuri</span>
      </a>

      <i
        className="bx bx-menu"
        id="menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home">Inicio</a>
        <a href="#sobremi">Sobre Mí</a>
        <a href="#skills">Skills</a>
        <a href="#education">Experiencia</a>
        <a href="#services">Servicios</a>
        <a href="#projects">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
