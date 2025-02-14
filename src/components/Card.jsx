import React from "react";
import "./css/Card.css";

function Card(props) {
  return (
    <div className="main-card-div">
      <img
        src={props.image}
        alt={props.name}
      ></img>
      <h3>{props.name}</h3>
      <div>
        <span>
          <strong>Description:</strong> {props.description}
        </span>
      </div>
    </div>
  );
}

export default Card;
