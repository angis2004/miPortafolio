import { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import 'animate.css';

// ── Imágenes WordPress ──────────────────────────────────────────────────────
import projImgsiseg         from '../img/siseg.png';
import projImgglobilandia   from '../img/Globilandia.png';
import projImgingenieros    from '../img/hringenieros.png';
import projImgfortika       from '../img/fortika2.png';
import projImgpaolo         from '../img/PaoloAldea.png';
import projImgkallpa        from '../img/Kallpa-center.png';
import projImglicoreria     from '../img/cavavip.jpeg';
import projImgvelas         from '../img/inesjaz.jpeg';
import projImgtapizones     from '../img/tapizones.png';
import projImgcasitex       from '../img/casitex.png';

// ── Imágenes HTML / CSS ─────────────────────────────────────────────────────
import projImgmaelo         from '../img/Maelosolar.png';
import projImg13            from '../img/react+html.png';
import projImgdevdatep      from '../img/Devdatep.png';
import projImgsistema_saas  from '../img/sistema-saas.png';

// ── Imágenes Docs / UX ──────────────────────────────────────────────────────
import projImgdoc                   from '../img/Documentacion2.png';
import projImgwireframepapel        from '../img/wireframe-papel.png';
import projImgdesign                from '../img/design.png';
import projImglanding               from '../img/Landing-Page.png';
import projImglandingmuni           from '../img/landing3.png';
import projImgocapacitacion_horarios from '../img/Diseño-Capacitacion-horarios.png';
import projImgreclutamiento         from '../img/reclutamiento-prototipo.png';

// ═══════════════════════════════════════════════════════════════════════════════
// DATOS DE PROYECTOS (fuera del componente para evitar re-creación en cada render)
// ═══════════════════════════════════════════════════════════════════════════════

const wordpressProjects = [
  {
    title: 'Facturación Digital',
    description: 'Página web para servicios de facturación digital que facilita la gestión y emisión de facturas electrónicas de manera rápida y segura.',
    imgUrl: projImgsiseg,
    link: 'https://sisegperu.com/',
  },
  {
    title: 'Tienda de Globos (WooCommerce)',
    description: 'E-commerce especializado en la venta de globos y decoración para eventos, con diseño atractivo y sistema de compra intuitivo.',
    imgUrl: projImgglobilandia,
    link: 'https://www.globilandia.com.pe/',
  },
  {
    title: 'Empresa de Construcción',
    description: 'Sitio corporativo para empresa constructora que muestra proyectos, servicios y valores de forma profesional y clara.',
    imgUrl: projImgingenieros,
    link: 'https://hringenierossac.online/',
  },
  {
    title: 'Construcción y Mantenimiento de Tanques',
    description: 'Página web para empresa dedicada a construcción y mantenimiento de tanques de agua, destacando experiencia y calidad en el sector.',
    imgUrl: projImgfortika,
    link: 'https://fortika.pe/',
  },
  {
    title: 'Bufete de Abogados',
    description: 'Sitio institucional para despacho de abogados que presenta áreas de especialización y facilita el contacto con clientes potenciales.',
    imgUrl: projImgpaolo,
    link: 'https://paoloaldea.com/',
  },
  {
    title: 'Venta de Tecnología (WooCommerce)',
    description: 'Tienda online para venta de aparatos tecnológicos, con catálogo organizado y opciones de pago seguras.',
    imgUrl: projImgkallpa,
    link: 'https://www.kallpacenter.com.pe/',
  },
  {
    title: 'Licorería Premium (WooCommerce)',
    description: 'Tienda online especializada en licores premium, con catálogo variado, fichas detalladas y proceso de compra sencillo.',
    imgUrl: projImglicoreria,
    link: 'https://licoreriacava.com/',
  },
  {
    title: 'Velas Artesanales (WooCommerce)',
    description: 'E-commerce de velas artesanales con diseño cálido, productos personalizados y experiencia de compra intuitiva.',
    imgUrl: projImgvelas,
    link: 'https://inesjaz.tiendada.com/',
  },
  {
    title: 'Tapizones (WooCommerce)',
    description: 'Tienda online de tapetes y alfombras decorativas con catálogo visual, filtros por categoría y proceso de compra simple.',
    imgUrl: projImgtapizones,
  },
  {
    title: 'Tienda de Ropa Infantil (WooCommerce)',
    description: 'E-commerce de ropa para niñas con catálogo organizado por tallas, diseño colorido y experiencia de compra amigable.',
    imgUrl: projImgcasitex,
  },
];

const htmlProjects = [
  {
    title: 'Landing Page – Energía Solar',
    description: 'Página estática con HTML, CSS y JavaScript para empresa de servicios de energía solar renovable.',
    imgUrl: projImgmaelo,
    link: 'https://maelo-solar.netlify.app/',
  },
  {
    title: 'Portafolio Web – React',
    description: 'Portafolio personal desarrollado con React y CSS, enfocado en diseño limpio, responsivo y animaciones fluidas.',
    imgUrl: projImg13,
  },
  {
    title: 'Sistema de Registro de Asistencia',
    description: 'Aplicación web progresiva (PWA) hecha en React + Vite para registrar la hora de entrada del personal, con diseño limpio y responsivo.',
    imgUrl: projImgdevdatep,
  },
  {
    title: 'Sistema SaaS – Red Social',
    description: 'Plataforma SaaS donde los usuarios pueden interactuar entre sí y adquirir apps de gestión para contadores y empresas.',
    imgUrl: projImgsistema_saas,
  },
];

const docProjects = [
  {
    title: 'Guía de Usuario Web',
    description: 'Documentación explicativa para el usuario final sobre cómo usar la página web: servicios, contacto y navegación.',
    imgUrl: projImgdoc,
  },
  {
    title: 'Documentación UX/UI – Wireframes en Papel',
    description: 'Primera documentación de UX/UI con wireframes en papel que define la estructura y flujo de navegación del sitio.',
    imgUrl: projImgwireframepapel,
  },
  {
    title: 'Diseño – Tienda de Ropa',
    description: 'Maquetación y diseño UX/UI de tienda WooCommerce de ropa para niñas con paleta de colores y componentes definidos.',
    imgUrl: projImgdesign,
  },
  {
    title: 'Diseño – Estudio Legal',
    description: 'Maquetación de landing page para empresa de abogados: servicios, equipo y sección de contacto.',
    imgUrl: projImglanding,
  },
  {
    title: 'Landing Page – Municipalidad',
    description: 'Prototipo de página institucional para municipalidad: trámites, noticias, contacto y banners informativos.',
    imgUrl: projImglandingmuni,
  },
  {
    title: 'Prototipo – Capacitación y Horarios',
    description: 'Diseño de interfaz para módulo de gestión de capacitaciones y horarios del personal dentro de un sistema interno.',
    imgUrl: projImgocapacitacion_horarios,
  },
  {
    title: 'Prototipo – Sistema de Reclutamiento',
    description: 'Maqueta de plataforma de reclutamiento con flujos de postulación, filtros de candidatos y panel de administración.',
    imgUrl: projImgreclutamiento,
  },
  {
    title: 'Prototipo – Sistema SaaS',
    description: 'Prototipo de plataforma SaaS con módulos de gestión para contadores y empresas, diseñado con enfoque en usabilidad.',
    imgUrl: projImgsistema_saas,
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENTE
// ═══════════════════════════════════════════════════════════════════════════════

const INITIAL_COUNT = 6;

export const Projects = () => {
  const [showAll, setShowAll] = useState({ first: false, second: false, third: false });

  const toggle = (tab) => setShowAll(prev => ({ ...prev, [tab]: !prev[tab] }));

  const renderProjects = (arr, tab) => {
    const visible = showAll[tab] ? arr : arr.slice(0, INITIAL_COUNT);
    return (
      <>
        <Row>
          {visible.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>
        {arr.length > INITIAL_COUNT && (
          <div className="projects-ver-mas">
            <button className="projects-btn-mas" onClick={() => toggle(tab)}>
              {showAll[tab] ? 'Ver menos' : 'Ver más'}
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div>
              <p className="section-label">MIS TRABAJOS</p>
              <h2>Proyectos</h2>
              <p>
                Explora algunos de los proyectos web que he desarrollado utilizando
                HTML, CSS, JavaScript y WordPress con Elementor. Incluye páginas
                informativas, documentaciones técnicas y landing pages, reflejando
                mi enfoque en diseño funcional y responsive.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">WordPress</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">HTML / CSS</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Docs / UX</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    {renderProjects(wordpressProjects, 'first')}
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    {renderProjects(htmlProjects, 'second')}
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    {renderProjects(docProjects, 'third')}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
