// src/components/Contacto.jsx
import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
// Asegúrate de importar los estilos del dropdown personalizado

const Contacto = () => {
  const form = useRef();
  const [selectedOption, setSelectedOption] = useState("Selecciona una Opción");
  const [showDropdown, setShowDropdown] = useState(false);

  const options = ["Llamada", "WhatsApp", "Email"];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ymo2941",
        "template_bgcwbt9",
        form.current,
        "yrueeY4GaQNAuxO57"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Mensaje enviado correctamente");
          e.target.reset();
          setSelectedOption("Selecciona una Opción");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Error al enviar el mensaje");
        }
      );
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <section className="contacto" id="contacto">
      <h2 className="heading">
        Contacta<span>me</span>
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <div className="input-row">
            <input type="text" name="user_name" placeholder="Nombre completo" required />
            <input type="text" name="user_company" placeholder="Empresa" />
          </div>

          <div className="input-row">
            <input type="text" name="user_phone" placeholder="Teléfono" />
            <input type="email" name="user_email" placeholder="Correo electrónico" required />
          </div>

          {/* Dropdown personalizado */}
          <div className="input-row">
            <div className="dropdown-container">
              <input type="hidden" name="user_contact_method" value={selectedOption} />
              <button
                type="button"
                className="dropdown-button main-button"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span className="dropdown-title text-truncate">{selectedOption}</span>
                <span className="dropdown-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </span>
              </button>
              {showDropdown && (
                <div className="dropdown-list-container">
                  <div className="dropdown-list-wrapper">
                    <ul className="dropdown-list">
{options.map((option) => (
  <li key={option} className="dropdown-list-item">
    <button
      type="button"
      className={`list-button ${selectedOption === option ? 'selected' : ''}`}
      onClick={() => handleSelect(option)}
    >
      <span className="text-truncate">{option}</span>
    </button>
  </li>
))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="input-group-2">
          <textarea
            name="user_message"
            cols="30"
            rows="10"
            placeholder="Escribe tu mensaje aquí"
            required
          ></textarea>
          <input type="submit" value="Enviar mensaje" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default Contacto;
