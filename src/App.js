// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import Header  from './components/Header.jsx';
import Home  from './components/Home.jsx';
// import SobreMi from './components/SobreMi.jsx';
import Education from './components/Education.jsx';
import Services  from './components/Services.jsx';
import { Projects } from './components/Projects.js';
// import Testimonials  from './components/Testimonials.jsx';
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';




const App = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <SobreMi /> */}
      <Education />
      <Services />
      <Projects />
      {/* <Testimonials /> */}
      <Contacto />
      <Footer />
    </>
  );
};

export default App;
