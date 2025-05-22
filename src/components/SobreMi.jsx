import React from 'react';
import perfilImg from '../img/perfil.jpg'; // Ajusta la ruta si está en otra carpeta

const SobreMi = () => {
  return (
    <section className="sobremi" id="sobremi">
      <div className="container-sobremi">
        <img src={perfilImg} alt="Foto de perfil" className="perfil-img" />
        <div className="texto-sobremi">
          <h2>Sobre mí</h2>
          <p>
            ¡Hola! Soy Angie, diseñadora UX/UI, desarrolladora web, y amante del diseño funcional. Me especializo en crear experiencias intuitivas y visualmente atractivas. También tengo conocimientos en bases de datos y documentación técnica. 💻🎨📄
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;