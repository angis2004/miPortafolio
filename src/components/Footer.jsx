// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
          <a href="https://www.linkedin.com/in/angie-ticllacuri-moscoso-a7a614238/" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/angis2004" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github"></i>
          </a>
        <a href="https://www.instagram.com/angieticllacur27/" target="_blank" rel="noopener noreferrer">
         <i className="bx bxl-instagram-alt"></i>
         </a>
      </div>
      <ul className="list">
        <li><a href="#home">Inicio</a></li>
        {/* <li><a href="#sobremi">Sobre mi</a></li> */}
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#services">Servicios</a></li>
      </ul>
      <p className="copyright">
        Copyright © 2025 Angie Ticllacuri | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
