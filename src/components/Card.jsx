import { Link } from "react-router-dom";
import "./css/Card.css";

function Card(props) {
  return (
    <div className="main-card-div">
      <div className="main-card-content">
        {/* Si hay una imagen, la mostramos. Si no, mostramos un mensaje de "No image available." */}
        {props.image ? (
          <img src={props.image} alt={props.name} />
        ) : (
          <h2>No image available.</h2>
        )}
        
        {/* Mostramos el nombre de la card */}
        <h3>{props.name}</h3>
      </div>
      
      {/* Botón para ver los detalles de la tarjeta */}
      <div className="view-button-div">
        {/* Link de React Router que redirige a la página de detalles de la card usando su id */}
        <Link className="card-link" to={`/card/${props.id}`}>
          <button className="view-button">View</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
