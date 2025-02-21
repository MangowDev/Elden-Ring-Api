import React from "react";
import "./EldenMap.css";

function EldenMap() {
  return (
    // Componente que retorna un Iframe que muestra el mapa del juego
    <div className="map-div">
      <iframe
        src="https://mapgenie.io/elden-ring/maps/the-lands-between?embed=light"
      ></iframe>
    </div>
  );
}

export default EldenMap;
