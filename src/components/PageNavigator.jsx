import React from "react";
import "./css/PageNavigator.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Componente para navegar entre las páginas
function PageNavigator({ page, setPage }) {

  // Funcion para avanzar de página
  const buttonRight = () => {
    setPage(Number(page) + 1);
  };

  // Funcion para retroceder de página
  const buttonLeft = () => {
    // Si es igual a 0, no puede retroceder
    if (Number(page) !== 0) {
      setPage(Number(page) - 1);
    }
  };

  return (
    <div className="page-navigator-div">
      <button onClick={buttonLeft}>
        <FaArrowLeft />
      </button>
      <button onClick={buttonRight}>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default PageNavigator;
