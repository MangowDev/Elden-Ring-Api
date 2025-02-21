import React, { useState } from "react";
import "./css/FrontPage.css";
import EldenLogo from "../assets/images/EldenringapiLogo.png";
import { FaArrowDown } from "react-icons/fa6";

function FrontPage() {
  const [isHidden, setIsHidden] = useState(false); // Estado para gestionar la visibilidad

  // Función que se ejecuta al hacer clic en el ícono
  const handleClick = () => {
    setIsHidden(true); // Cambia el estado para ocultar el contenedor
  };

  return (
    <div className={`front-page-div ${isHidden ? "hidden" : ""}`}> {/* Agrega clase "hidden" si isHidden es true */}
      <div className="front-page-info-div">
        <img src={EldenLogo} alt="Elden-logo" />
        <h2>- Discover everything about the world of Elden Ring with this easy API checker. -</h2>
        <h3>- Made by <span>MangoDev</span> -</h3>
        <FaArrowDown onClick={handleClick} /> {/* Al hacer clic, se aplica la función handleClick */}
      </div>
    </div>
  );
}

export default FrontPage;
