// src/components/Header.jsx
import React, { useEffect,useState } from 'react';
// import 'styles.css'// Asegúrate de tener el CSS

const Header = () => {
  const[isMenuOpen,setIsMenuOpen] = useState(false);


  // Cerrar el menú al hacer clic en un enlace
  useEffect(() => {
    const links = document.querySelectorAll('.navbar a');
    links.forEach((link) =>
      link.addEventListener('click', () => setIsMenuOpen(false))
    );
  }, []);


return (
    <header className="header">
      <a href="#home" className="logo">
        Angie <span>Ticllacuri</span>
      </a>

      {/* Icono de menú móvil */}
      <i
        className="bx bx-menu"
        id="menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>

      {/* Navbar con clase toggle si está abierto */}
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" className="active">Inicio</a>
         {/* <a href="#sobremi"> Sobre mi</a> */}
        <a href="#education"> Experiencia</a>
        <a href="#services">Servicios</a>
        {/* <a href="#testimonials">Testimonials</a> */}
        <a href="#projects">Projectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
