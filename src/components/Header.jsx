import React from 'react'
import "./css/Header.css";
import EldenLogo from "../assets/images/EldenringapiLogo.png"

function Header() {
  return (
    <header>
        <img src={EldenLogo} alt='Elden-logo'></img>
    </header>
  )
}

export default Header