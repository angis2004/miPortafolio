// src/components/Header.jsx
import React, { useEffect,useState } from 'react';
// import 'styles.css'// Asegúrate de tener el CSS

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar el menú al hacer clic en un enlace
  useEffect(() => {
    const links = document.querySelectorAll('.navbar a');
    
    const handleClick = () => setIsMenuOpen(false);
    
    // Agregar eventos
    links.forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    // ✅ CLEANUP - Limpiar eventos cuando el componente se desmonta
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
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
        <a href="#education">Experiencia</a>
        <a href="#services">Servicios</a>
        <a href="#projects">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;