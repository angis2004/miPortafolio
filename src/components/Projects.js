import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../img/siseg.png";
import projImg2 from "../img/Globilandia.png";
import projImg3 from "../img/hringenieros.png";
import projImg4 from "../img/fortika2.png";
import projImg5 from "../img/PaoloAldea.png";
import projImg6 from "../img/Kallpa-center.png";
import projImg7 from "../img/Documentacion2.png";
import projImg8 from "../img/design.png";
import projImg9 from "../img/Landing-Page.png";
import projImg10 from "../img/landing3.png";
import projImg11 from "../img/Maelosolar.png";
import projImg12 from "../img/image 7.png";
import projImg13 from "../img/react+html.png";
import projImg14 from "../img/Okara.jpeg";
import projImg15 from "../img/cavavip.jpeg";
import projImg16 from "../img/inesjaz.jpeg";
import projImg17 from "../img/Clinica-Okara.jpeg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Facturación Digital",
      description: "Página web para servicios de facturación digital que facilita la gestión y emisión de facturas electrónicas de manera rápida y segura.",
      imgUrl: projImg1,
      link: "https://sisegperu.com/",
    },
    {
      title: "Tienda de Globos (WooCommerce)",
      description: "E-commerce especializado en la venta de globos y decoración para eventos, con un diseño atractivo y sistema de compra intuitivo.",
      imgUrl: projImg2,
       link: "https://www.globilandia.com.pe/",
    },

    {
      title: "Empresa de Construcción",
      description: "Sitio corporativo para una empresa constructora que muestra sus proyectos, servicios y valores de forma profesional y clara.",
      imgUrl: projImg3,
          link: "https://hringenierossac.online/",
    
    },

    {
      title: "Construcción y Mantenimiento de Tanques de Agua",
      description: "Página web para empresa dedicada a la construcción y mantenimiento de tanques de agua, destacando su experiencia y calidad en el sector.",
      imgUrl: projImg4,
  
      link: "https://fortika.pe/",
    },

    {
      title: " Bufete de Abogados",
      description: "Sitio institucional para despacho de abogados que presenta sus áreas de especialización y facilita el contacto con clientes potenciales.",
      imgUrl: projImg5,
      link: "https://paoloaldea.com/",
    },
    {
      title: "Venta de Aparatos Tecnológicos (WooCommerce)",
      description: "Tienda online para la venta de aparatos tecnológicos, con catálogo organizado y opciones de pago seguras para una experiencia de compra eficiente.",
      imgUrl: projImg6,
       link: "https://www.kallpacenter.com.pe/",
    },
        {
      title: "Venta Licores (WooCommerce)",
      description: "Tienda online especializada en licores premium, con un catálogo variado, fichas detalladas y un proceso de compra sencillo y seguro.",
      imgUrl: projImg15,
       link: "https://licoreriacava.com/",
    },
            {
      title: "Venta Velas (WooCommerce)",
     description: "Ecommerce dedicado a la venta de velas artesanales, con un diseño cálido, productos personalizados y una experiencia de compra intuitiva.",
      imgUrl: projImg16,
       link: "https://inesjaz.tiendada.com/",
    },

{
  title: "Sitio Web Corporativo - Clínica Estética",
  description: "Página web corporativa para clínica de medicina estética y láser, con diseño elegante, catálogo de tratamientos y sistema de contacto directo para agendar citas.",
  imgUrl: projImg17,
  link: "https://okara.pe/",
  
} ,
  ];


  const docProjects = [
    {
      title: "Guía de Usuario Web",
      description: "Documentación explicativa para el usuario final sobre cómo usar la página web de la empresa: servicios, contacto, y navegación.",
      imgUrl: projImg7,
     link: "https://www.globilandia.com.pe/",
    },
        {
      title: "Landing Page ",
      description: "Primera Documentación de UX/UI para las secciones de la pagina web",
      imgUrl: projImg12,
      link: "https://www.globilandia.com.pe/",
    },
    {
      title: "Landing Page - Tienda de Ropa",
      description: "Woocomerce tienda de venta de ropa para niñas",
      imgUrl: projImg8,
      link: "https://www.globilandia.com.pe/",
    },
    {
      title: "Diseño - Estudio Legal",
      description: "Maquetación de una landing page para una empresa de abogados, mostrando secciones como servicios, equipo y contacto.",
      imgUrl: projImg9,
    },

    {
      title: "Landing Page - Municipalidad",
      description: "Prototipo de una página institucional para una municipalidad: trámites, noticias, contacto y banners informativos.",
      imgUrl: projImg10,
    },
        {
      title: "Landing Page - Clínica Okara",
      description: "Prototipo de una clinica estetica encargada de tratamientos corporales y faciales.",
      imgUrl:projImg14,
    },
  ];

  const htmlProjects = [
    {
      title: "Pagina Web 1",
      description: "Landing page estática hecha con HTML ,CSS , Javascript, enfocada en servicios de una empresa de servicio renobale con energia solar",
      imgUrl: projImg11,
       link: "https://www.globilandia.com.pe/",
    },
    {
      title: "Pagina Web 2",
      description: "Portafolio realizado con Html , css y React",
      imgUrl: projImg13,
       link: "https://www.globilandia.com.pe/",
    },
    {
      title: "Pagina Web 3",
      description: "",
      imgUrl: projImg3,
    },
    {
      title: "Pagina Web 4",
      description:"",
      imgUrl: projImg4,
    },
  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                // <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div>
                  <h2>Projectos</h2>
                  <p>
                    Explora algunos de los proyectos web que he desarrollado utilizando 
                    HTML, CSS, JavaScript, y WordPress con Elementor. Incluye páginas 
                    informativas, documentaciones técnicas y landing pages, reflejando
                     mi enfoque en diseño funcional y responsive.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Wordpress</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Html/Css</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Docs/Landing</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}> */}
                    <Tab.Content id="slideInUp"> 
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            htmlProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            docProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              );
                            })
                          }
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}