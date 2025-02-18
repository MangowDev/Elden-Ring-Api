import React from "react";
import "./css/Navbar.css"; 
import { FaMapMarkedAlt } from "react-icons/fa"; 
import {
  GiBlackKnightHelm,
  GiBroadsword,
  GiPotionBall,
  GiShoulderArmor,
} from "react-icons/gi";
import { PiFinnTheHumanFill } from "react-icons/pi"; 
import { Link } from "react-router-dom"; 

function Navbar({ setSection }) {
  // Función que se ejecuta cuando se hace clic en un enlace de la barra de navegación
  const handleClick = (section) => {
    setSection(section); // Actualiza la sección con el valor correspondiente al enlace
    localStorage.setItem("section", section);
  };

  return (
    <div className="main-nav-div"> {/* Contenedor principal de la barra de navegación */}
      <h2>Get all the information about the world of Elden Ring</h2> 
      <nav> 
        <ul> {/* Lista de enlaces */}
          {/* Enlace para Items */}
          <Link className="nav-link" to={`/`}>
            <li onClick={() => handleClick("items")}>
              <GiPotionBall className="custom-icon" /> Items {/* Icono y texto para Items */}
            </li>
          </Link>

          {/* Enlace para Weapons */}
          <Link className="nav-link" to={`/`}>
            <li onClick={() => handleClick("weapons")}>
              <GiBroadsword className="custom-icon" /> Weapons {/* Icono y texto para Weapons */}
            </li>
          </Link>

          {/* Enlace para Armors */}
          <Link className="nav-link" to={`/`}>
            <li onClick={() => handleClick("armors")}>
              <GiShoulderArmor className="custom-icon" /> Armors {/* Icono y texto para Armors */}
            </li>
          </Link>

          {/* Enlace para Locations */}
          <Link className="nav-link" to={`/`}>
            <li onClick={() => handleClick("locations")}>
              <FaMapMarkedAlt className="custom-icon" /> Locations {/* Icono y texto para Locations */}
            </li>
          </Link>

          {/* Enlace para NPCs (Personajes) */}
          <Link className="nav-link" to={`/`}>
            <li onClick={() => handleClick("npcs")}>
              <PiFinnTheHumanFill className="custom-icon" /> Characters {/* Icono y texto para Characters */}
            </li>
          </Link>

          {/* Enlace para Bosses */}
          <Link className="nav-link" to={`/`}>
            <li onClick={() => handleClick("bosses")}>
              <GiBlackKnightHelm className="custom-icon" /> Bosses {/* Icono y texto para Bosses */}
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
