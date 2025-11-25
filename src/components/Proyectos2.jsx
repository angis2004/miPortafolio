import React from "react";


import proyecto1 from "../img/proyecto1.png";
// import proyecto2 from '../img/proyecto2.png';
// import proyecto3 from '../img/proyecto3.png';

const Proyectos2 = () => {
  const proyectos = [
    {
      imagen: proyecto1,
      titulo: "Home One",
      texto: "Bespoke Treatments. Natural Results. The Best of You.",
      link: "https://www.globilandia.com.pe/",
    },
    {
      imagen: proyecto1,
      titulo: "Home Two",
      texto: "Bespoke Treatments. Natural Results. The Best of You.",
    },
    {
      imagen: proyecto1,
      titulo: "Home Three",
      texto: "Bespoke Treatments. Natural Results. The Best of You.",
    },
        {
      imagen: proyecto1,
      titulo: "Home Three",
      texto: "Bespoke Treatments. Natural Results. The Best of You.",
    },
  ];

  return (
    <section className="proyecto-section" id="proyecto">
      <div className="proyecto-header">
        {/* <h2 className="proyecto-number">5</h2> */}
        {/* <p className="proyecto-subtitle">READY-MADE WEBSITE CONCEPTS</p> */}
        <h3 className="proyecto-title">
        Projectos
        </h3>
        <p className="proyecto-desc">
        Explora algunos de los proyectos web que he desarrollado utilizando 
                    HTML, CSS, JavaScript, y WordPress con Elementor. Incluye páginas 
                    informativas, documentaciones técnicas y landing pages, reflejando
                     mi enfoque en diseño funcional y responsive.
        </p>
      </div>

      <div className="proyecto-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="proyecto-item">
            {/* ← AQUÍ ENVUELVES LA IMAGEN CON EL ENLACE */}
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
              <div className="proyecto-image-scroll">
                <img src={proyecto.imagen} alt={proyecto.titulo} />
              </div>
            </a>

            <h4>{proyecto.titulo}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos2;
