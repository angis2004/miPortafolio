// src/components/Contact.jsx
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Mensaje enviado correctamente");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Hubo un error al enviar el mensaje");
        }
      );
  };

  return (
    <section className="contacto" id="contacto">
      <h2 className="heading">
        Contacto <span>Me</span>
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <div className="input-box">
            <input type="text" name="user_name" placeholder="Full Name" required />
            <input type="email" name="user_email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="number" name="user_phone" placeholder="Phone Number" />
            <input type="text" name="user_subject" placeholder="Subject" />
          </div>
        </div>
        <div className="input-group-2">
          <textarea name="user_message" cols="30" rows="10" placeholder="Your Message" required></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default Contacto;
