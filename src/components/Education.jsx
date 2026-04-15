import React from 'react';

const trabajos = [
  {
    titulo: 'Diseñadora Web & UX/UI',
    empresa: 'Codeplex',
    ubicacion: 'Remoto',
    tipo: 'REMOTO',
    fechas: 'Feb 2026 – Presente',
    duracion: 'En curso',
    actual: true,
    descripcion:
      'Diseño y desarrollo de un sistema SaaS de manera remota. Diseño de interfaces UX/UI funcionales e intuitivas en Figma. Colaboración activa con el equipo de desarrollo para garantizar la coherencia visual y la experiencia del usuario en cada módulo.',
  },
  {
    titulo: 'Diseñadora Web',
    empresa: 'Casitex',
    ubicacion: 'Gamarra',
    tipo: 'PRESENCIAL',
    fechas: 'Ene 2026',
    duracion: null,
    actual: false,
    descripcion:
      'Mejora y rediseño del sitio web corporativo en WordPress. Optimización de rendimiento, estructura visual y experiencia del usuario. Posición dejada al obtener una oportunidad de mayor proyección profesional en Codeplex.',
  },
  {
    titulo: 'Diseñadora Web',
    empresa: 'Clínica Okara',
    ubicacion: 'Surco',
    tipo: 'PRESENCIAL',
    fechas: 'Jun – Oct 2025',
    duracion: '4 meses',
    actual: false,
    descripcion:
      'Diseño completo del sitio web desde cero: maquetación en Figma e implementación en WordPress con Elementor Pro. Optimización SEO con Yoast, gestión de hosting y cPanel (SSL, DNS, backups), administración de correos corporativos. Contrato temporal finalizado según acuerdo.',
  },
  {
    titulo: 'Auxiliar de TI',
    empresa: 'Golden Investment S.A.',
    ubicacion: null,
    tipo: 'PRESENCIAL',
    fechas: 'Ago 2024 – Ene 2025',
    duracion: '6 meses',
    actual: false,
    descripcion:
      'Desarrollo de nuevas funcionalidades en aplicación Angular con consumo de APIs REST. Optimización de módulos en ASP.NET MVC. Diseño de interfaces UX en Figma. Gestión de base de datos en SQL Server: tablas, vistas, procedimientos almacenados y consultas complejas.',
  },
];

const practicas = [
  {
    titulo: 'Diseñadora UX/UI',
    empresa: 'Devdatep Consulting',
    ubicacion: null,
    tipo: 'REMOTO',
    fechas: 'Dic 2025 – Feb 2026',
    duracion: '~3 meses',
    descripcion:
      'Diseño completo en Figma de un sistema de gestión de horarios y asistencia de personal. Creación de wireframes, prototipos interactivos y guías de estilos orientadas a usabilidad en entornos corporativos.',
  },
  {
    titulo: 'Diseñadora Web & UX/UI',
    empresa: 'Agencia DN',
    ubicacion: null,
    tipo: 'PRESENCIAL',
    fechas: 'Mar – Jun 2025',
    duracion: '3 meses',
    descripcion:
      'Desarrollo de landing pages y tiendas e-commerce con WordPress, Elementor y WooCommerce. Diseño de identidades visuales personalizadas con CSS. Documentación técnica y guías visuales para clientes. Reuniones directas con clientes para levantamiento de requerimientos.',
  },
  {
    titulo: 'Asistente de Ciberseguridad',
    empresa: 'Terra Go Latam',
    ubicacion: 'San Miguel',
    tipo: 'PRESENCIAL',
    fechas: 'Mar 2025',
    duracion: null,
    descripcion:
      'Implementación de seguridad en correos corporativos y gestión de accesos. Recuperación, organización y respaldo de cuentas Meta de la empresa. Creación de páginas de negocio en Facebook para venta de productos. Gestión básica de campañas y estrategia de ventas en redes sociales.',
  },
];

const TipoTag = ({ tipo }) => (
  <span className={`exp-tipo-tag ${tipo === 'REMOTO' ? 'tag-remoto' : 'tag-presencial'}`}>
    {tipo}
  </span>
);

const ExpCard = ({ item }) => (
  <div className="exp-card">
    <div className="exp-card-top">
      <div className="exp-card-left">
        <h3 className="exp-titulo">
          {item.titulo}
          {item.actual && (
            <span className="exp-actual">
              <span className="exp-dot"></span>ACTUAL
            </span>
          )}
        </h3>
        <div className="exp-meta">
          <span className="exp-empresa">
            {item.empresa}{item.ubicacion ? ` · ${item.ubicacion}` : ''}
          </span>
          <TipoTag tipo={item.tipo} />
        </div>
      </div>
      <div className="exp-card-right">
        <span className="exp-fechas">{item.fechas}</span>
        {item.duracion && <span className="exp-duracion">{item.duracion}</span>}
      </div>
    </div>
    <p className="exp-desc">{item.descripcion}</p>
  </div>
);

const Education = () => {
  return (
    <section className="education" id="education">
      <p className="section-label">TRAYECTORIA</p>
      <h2 className="heading">Experiencia</h2>

      <div className="exp-wrapper">

        {/* Grupo: Experiencia Laboral */}
        <div className="exp-group-label">
          <i className='bx bx-briefcase-alt-2'></i>
          <span>EXPERIENCIA LABORAL</span>
        </div>
        <div className="exp-cards-list">
          {trabajos.map((item, i) => (
            <ExpCard key={i} item={item} />
          ))}
        </div>

        {/* Grupo: Prácticas */}
        <div className="exp-group-label">
          <i className='bx bx-bookmark-alt'></i>
          <span>PRÁCTICAS PREPROFESIONALES</span>
        </div>
        <div className="exp-cards-list">
          {practicas.map((item, i) => (
            <ExpCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
