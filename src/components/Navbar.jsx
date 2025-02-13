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

function Navbar({ setSection }) {
  const handleClick = (section) => {
    setSection(section);
  };

  return (
    <div className="main-nav-div">
      <h2>Get all the information about the world of Elden Ring</h2>
      <nav>
        <ul>
          <li onClick={() => handleClick("items")}>
            <GiPotionBall className="custom-icon" /> Items
          </li>
          <li onClick={() => handleClick("weapons")}>
            <GiBroadsword className="custom-icon" /> Weapons
          </li>
          <li onClick={() => handleClick("armors")}>
            <GiShoulderArmor className="custom-icon" /> Armors
          </li>
          <li onClick={() => handleClick("locations")}>
            <FaMapMarkedAlt className="custom-icon" /> Locations
          </li>
          <li onClick={() => handleClick("npcs")}>
            <PiFinnTheHumanFill className="custom-icon" /> Characters
          </li>
          <li onClick={() => handleClick("bosses")}>
            <GiBlackKnightHelm className="custom-icon" /> Bosses
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
