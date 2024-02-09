/* eslint-disable no-undef */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
init(import.meta.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");
    emailjs
      .sendForm(
        "service_j5gsidy",
        "template_grk1k5d",
        form.current,
        import.meta.env.VITE_REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); //remet à 0 tous les inputs
          formMess.innerHTML = `<p class="success">Message envoyé !</p>`;
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 3500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML = `<p class="error">Une erreur s'est produite, veuillez réessayer</p>`;
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 3500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input
          type="text"
          name="name"
          required
          autoComplete="off"
          id="name"
          placeholder="Prénom Nom"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          placeholder="Votre e-mail"
          id="email"
        />
        <label>Message</label>

        <textarea name="message" id="mess" rows="8" required></textarea>
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
