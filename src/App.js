// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import './styles.css'; // 
import CursorTrail from './components/CursorTrail.js'; // ← AGREGAR ESTA LÍNEA
import Header  from './components/Header.jsx';
import Home  from './components/Home.jsx';
// import SobreMi from './components/SobreMi.jsx';
import Education from './components/Education.jsx';
import Services  from './components/Services.jsx';
import { Projects } from './components/Projects.js';
import Proyectos2 from './components/Proyectos2.jsx';
// import Testimonials  from './components/Testimonials.jsx';
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';
import './App.css';




const App = () => {
  return (
    <>
    <CursorTrail />
      <Header />
      <Home />
      {/* <SobreMi /> */}
      <Education />
      <Services />
    <Projects />
   {/*     <Proyectos2/>*/}
      {/* <Testimonials /> */}
      <Contacto />
      <Footer />
    </>
  );
};

export default App;
