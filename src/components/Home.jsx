import React from 'react';
import perfilImg from '../img/perfil2.png'; // Ajusta la ruta si está en otra carpeta


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
          Me caracterizo por mi entusiasmo y rápida capacidad de aprendizaje, adaptándome con facilidad a distintos entornos. Soy organizada, proactiva y orientada a resultados de calidad. Destaco por mis habilidades en liderazgo, comunicación efectiva y resolución de problemas, contribuyendo al éxito de los proyectos y equipos.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/angie-ticllacuri-moscoso-a7a614238/" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/angis2004" target="_blank" rel="noopener noreferrer" >
          <i className="bx bxl-github"></i>
          </a>
        <a href="https://www.instagram.com/angieticllacur27/" target="_blank" rel="noopener noreferrer">
         <i className="bx bxl-instagram-alt"></i>
         </a>

        </div>
        <div className="btn-group">
          <a href="/CV-Angie-Ticllacuri-Moscoso.pdf"  target="_blank" className="btn">Descarga CV </a>
          <a href="#contacto" className="btn">Contactame</a>
        </div>
      </div>
      <div className="home-img">
        <img src={perfilImg} alt="Perfil Angie" />
      </div>
    </section>
  );
};

export default Home;
