import React from 'react';
import perfilImg from '../img/perfil2.png';

const SobreMi = () => {
  return (
    <section className="sobremi" id="sobremi">
      <p className="section-label">CONÓCEME</p>
      <h2 className="heading">Sobre <span>Mí</span></h2>
      <div className="container-sobremi">
        <div className="sobremi-img">
          <img src={perfilImg} alt="Angie Ticllacuri" />
        </div>
        <div className="texto-sobremi">
          <p className="sobremi-intro">
            Soy egresada de la carrera de Sistemas del Instituto SISE (2025),
            actualmente convalidando para obtener el título de Ingeniera de Sistemas.
            Me desempeño como <span>Diseñadora Web & UX/UI</span> de manera remota,
            trabajando en el desarrollo de sistemas SaaS y diseño de interfaces
            funcionales e intuitivas.
          </p>
          <p>
            A lo largo de mi carrera he trabajado en entornos presenciales y remotos,
            para empresas del sector salud, tecnología, comercio y agencias digitales.
            Me caracterizo por ser meticulosa, aprender rápido y entregarle a cada
            proyecto el nivel de calidad que merece.
          </p>
          <div className="sobremi-cards">
            <div className="sobremi-card">
              <i className='bx bx-bulb'></i>
              <h4>Aprendizaje Rápido</h4>
              <p>Me adapto con facilidad a nuevas tecnologías, herramientas y equipos de trabajo.</p>
            </div>
            <div className="sobremi-card">
              <i className='bx bx-check-shield'></i>
              <h4>Responsabilidad</h4>
              <p>Cumplo con mis entregas, mantengo comunicación clara y cuido cada detalle del proyecto.</p>
            </div>
            <div className="sobremi-card">
              <i className='bx bx-group'></i>
              <h4>Liderazgo & Comunicación</h4>
              <p>Participo activamente en reuniones con clientes y equipos, proponiendo mejoras concretas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
