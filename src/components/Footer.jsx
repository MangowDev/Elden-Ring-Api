import React from "react";
import {
  FaArrowUp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import "./css/Footer.css";

function Footer() {
  return (
    <footer>
      {/* Sección con la información del desarrollador */}
      <div>
        <p>
          - MangoDev - 2025 | <b>mangodev03@gmail.com</b>
        </p>
      </div>

      {/* Sección con los créditos de la API usada */}
      <div className="credits-div">
        <p>
          - Made with the{" "}
          <a href="https://docs.eldenring.fanapis.com/">
            <b>Elden Ring Open Source Api</b>
          </a>
        </p>
      </div>

      {/* Sección con los enlaces a redes sociales */}
      <div className="social-media-div">
        <a href="https://x.com/Angelniwe33">
          <FaTwitter /> {/* Icono de Twitter */}
        </a>
        <a href="https://www.instagram.com/angeel_rc3/">
          <FaInstagram /> {/* Icono de Instagram */}
        </a>
        <a href="https://github.com/MangowDev">
          <FaGithub /> {/* Icono de GitHub */}
        </a>
        <a href="https://es.linkedin.com/in/%C3%A1ngel-robles-76784a313">
          <FaLinkedin /> {/* Icono de LinkedIn */}
        </a>
      </div>
    </footer>
  );
}

export default Footer; // Exportamos el componente para su uso en la aplicación
