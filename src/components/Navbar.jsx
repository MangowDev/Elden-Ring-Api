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
  const handleClick = (section) => {
    setSection(section);
  };

  return (
    <div className="main-nav-div">
      <h2>Get all the information about the world of Elden Ring</h2>
      <nav>
        <ul>
          <Link className="nav-link" to={`/`}>
          <li onClick={() => handleClick("items")}>
            <GiPotionBall className="custom-icon" /> Items
          </li>
          </Link>
          <Link className="nav-link" to={`/`}>
          <li onClick={() => handleClick("weapons")}>
            <GiBroadsword className="custom-icon" /> Weapons
          </li>
          </Link>
          <Link className="nav-link" to={`/`}>
          <li onClick={() => handleClick("armors")}>
            <GiShoulderArmor className="custom-icon" /> Armors
          </li>
          </Link>
          <Link className="nav-link" to={`/`}>
          <li onClick={() => handleClick("locations")}>
            <FaMapMarkedAlt className="custom-icon" /> Locations
          </li>
          </Link>
          <Link className="nav-link" to={`/`}>
          <li onClick={() => handleClick("npcs")}>
            <PiFinnTheHumanFill className="custom-icon" /> Characters
          </li>
          </Link>
          <Link className="nav-link" to={`/`}>
          <li onClick={() => handleClick("bosses")}>
            <GiBlackKnightHelm className="custom-icon" /> Bosses
          </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
