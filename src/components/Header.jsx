import React from 'react'
import "./css/Header.css";
import EldenLogo from "../assets/images/EldenringapiLogo.png"

// Componente que retorna la cabecera de la página
function Header() {
  return (
    // Devuelve un header con el logo del sitio web
    <header>
        <img src={EldenLogo} alt='Elden-logo'></img>
    </header>
  )
}

export default Header