// src/components/Testimonials.jsx

import React from 'react';
import perfil3 from '../img/perfil3.jpg';
// import perfil2 from '../assets/img/perfil2.jpg';
//import '../assets/css/styles.css'; // Asegúrate de tener el CSS vinculado

const testimonialsData = [
  {
    image: perfil3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut esse eius cum illo quisquam neque? Similique nostrum possimus accusamus.',
    stars: 5
  },
  {
                
    image: perfil3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut esse eius cum illo quisquam neque? Similique nostrum possimus accusamus.',
    stars: 5
  },
  {
    
    image: perfil3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ut esse eius cum illo quisquam neque? Similique nostrum possimus accusamus.',
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-box">
        <h2 className="heading">Testimonials</h2>
        <div className="wrapper">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <img src={testimonial.image} alt={`Foto de ${testimonial.name}`} />
              <h2>{testimonial.name}</h2>
              <div className="rating">
                {Array.from({ length: testimonial.stars }, (_, i) => (
                  <i className="bx bxs-star" id="star" key={i}></i>
                ))}
              </div>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
