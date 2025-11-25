// src/components/Services.jsx
import React from "react";


const servicesData = [
  {
    icon: "bx bxs-paint",
    title: "UI Design",
    description:
      "Diseño de interfaces atractivas y usables con Figma y Photoshop, enfocándome en la experiencia del usuario.",
    link: "https://www.globilandia.com.pe/",
    },
  {
     icon: "bx bx-code-alt",
    title: "Frontend Development",
    description:
      "Construcción y personalización de sitios web responsivos usando HTML, CSS, JavaScript, Angular, React y WordPress con Elementor.",
  },
  {
    icon: "bx bxs-data", 
    title: "Database Management & Backend Basics",
    description:
      "Manejo de bases de datos SQL Server, creación de consultas, procedimientos almacenados y consumo básico de APIs para integrar datos.",
  },
  {
     icon: "bx bxl-meta", 
    title: "Digital Marketing & Social Media",
    description:
      "Creación de páginas de negocio y gestión básica de campañas en redes sociales (Facebook, Instagram, TikTok). Conocimientos en seguridad y buenas prácticas para proteger perfiles y marcas.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="main-text">
        <h2>Servicios</h2>
      </div>

      <div className="section-services">
        {servicesData.map((service, index) => (
          <div className="service-box" key={index}>
            
          <i className={`${service.icon} service-icon`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
             {/* <div className="btn-s"> 
            
              <a href="#contact" className="btn-service">Read</a>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;