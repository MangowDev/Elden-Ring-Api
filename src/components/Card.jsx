import { Link } from "react-router-dom";
import "./css/Card.css";

function Card(props) {
  return (
    <div className="main-card-div">
      <div className="main-card-content">
        {props.image ? (
          <img src={props.image} alt={props.name} />
        ) : (
          <h2>No image available.</h2>
        )}
        <h3>{props.name}</h3>

        <div>
          {Object.entries(props).map(([key, value]) =>
            key !== "image" && key !== "name" && key !== "id" ? (
              <span key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>{" "}
                {value ? value : `No ${key} available`}
              </span>
            ) : null
          )}
        </div>
      </div>
      <div className="view-button-div">
        <Link className="card-link" to={`/card/${props.id}`}>
          <button className="view-button">View</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
