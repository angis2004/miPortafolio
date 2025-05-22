import React from 'react';
import perfilImg from '../img/perfil.jpg'; // Ajusta la ruta si está en otra carpeta

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hola, mi nombre es <span>Angie</span>
        </h1>
        <h3 className="text-animation">
          I'm a <span></span>
        </h3>
        <p>
Soy una diseñadora web creativa y detallista con formación en la carrera de computacion e informática. Me apasiona crear sitios web intuitivos que combinen funcionalidad y estilo. ¡Construyamos algo increíble juntos!
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/angie-ticllacuri-terra-go-a7a614238/" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/angis2004" >
          <i className="bx bxl-github"></i>
          </a>
        <a href="https://www.instagram.com/angieticllacur27/" target="_blank" rel="noopener noreferrer">
         <i className="bx bxl-instagram-alt"></i>
         </a>

        </div>
        <div className="btn-group">
          <a href="/cvTicllacuriMoscoso-Angie.pdf" className="btn">Descarga CV </a>
          <a href="#contact" className="btn">Contactame</a>
        </div>
      </div>
      <div className="home-img">
        <img src={perfilImg} alt="Perfil Angie" />
      </div>
    </section>
  );
};

export default Home;
