import React from "react";
import "./EldenMap.css";

function EldenMap() {
  return (
    <div className="map-div">
      <iframe
        src="https://mapgenie.io/elden-ring/maps/the-lands-between?embed=light"
      ></iframe>
    </div>
  );
}

export default EldenMap;
