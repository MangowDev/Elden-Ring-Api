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
      <div>
        <p>
          © MangoDev - 2025 | <b>mangodev03@gmail.com</b>
        </p>
      </div>
      <div className="credits-div">
        <p>
          - Made with the{" "}
          <a href="https://docs.eldenring.fanapis.com/">
            <b>Elden Ring Open Source Api</b>
          </a>
        </p>
      </div>
      <div className="social-media-div">
        <a href="https://x.com/Angelniwe33">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/angeel_rc3/">
          <FaInstagram />
        </a>
        <a href="https://github.com/MangowDev">
          <FaGithub />
        </a>
        <a href="https://es.linkedin.com/in/%C3%A1ngel-robles-76784a313">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
