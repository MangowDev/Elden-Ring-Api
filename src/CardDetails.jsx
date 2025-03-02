import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fields from "./utils/Atributes.js";
import "./CardDetails.css";

function CardDetails({ sections }) {
  const { id } = useParams(); // Obtenemos el parámetro 'id' de la URL para identificar qué tarjeta ver
  const [data, setData] = useState([]); // Inicializamos el estado para almacenar los datos de la tarjeta
  let section;

  // Añadimos un valor a la variable section
  if (localStorage.getItem("section") === null) {
    section = sections; // Si el localStorage no existe, le damos el valor con un prop
  } else {
    section = localStorage.getItem("section"); // Si existe, le damos el valor del localStorage
  }

  // useEffect para realizar la petición a la API con la id y la seccion correspondientes
  useEffect(() => {
    fetch(`https://eldenring.fanapis.com/api/${section}/${id}`)
      .then((response) => response.json()) // Convertimos la respuesta a formato JSON
      .then((result) => {
        setData(result.data); // Establecemos los datos obtenidos en el estado
      });
  }, [section, id]); // Se ejecutara cada vez que la seccion o el id cambien

  const fieldList = fields[section];

  // Obtenemos la lista de campos para la sección actual desde fields.js

  return (
    <div className="main-card-details">
      {" "}
      {/* Contenedor principal de los detalles de la tarjeta */}
      <div className="main-card-details-div">
        {/* Si hay una imagen, la mostramos; si no, mostramos un mensaje de "No image available." */}
        {data.image ? (
          <img src={data.image} alt={data.name} />
        ) : (
          <h2>No image available.</h2>
        )}

        {/* Mostramos el nombre de la tarjeta */}
        <h3>{data.name}</h3>

        <div className="card-details-info">
          {/* Contenedor de la información de la tarjeta */}

          {/* Iteramos sobre los campos de la sección (fieldList) y mostramos los valores correspondientes */}
          {fieldList.map((field) => {
            let content; // Variable que almacenará el contenido a mostrar

            // Excluimos los campos "image", "name" e "id" ya que ya se muestran antes
            if (field !== "image" && field !== "name" && field !== "id") {
              // Si el campo es uno de estos, significa que su valor es un array de objetos
              if (
                field === "attack" ||
                field === "resistance" ||
                field === "defence" ||
                field === "requiredAttributes" ||
                field === "dmgNegation"
              ) {
                // Verificamos que data[field] exista y sea un array antes de usar .map()
                content =
                  data[field] && Array.isArray(data[field]) ? (
                    <ul className="extra-fields-ul">
                      {data[field].map((extraField, index) => (
                        <li key={index}>
                          {/* Mostramos el nombre y el valor correspondiente */}
                          {extraField.name}: {extraField.amount}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    // Si el campo no tiene datos, mostramos un mensaje de "No disponible"
                    `No ${field} available`
                  );
              } else {
                // Si el campo es un valor simple (string, número, etc.), lo mostramos directamente
                content = data[field] ? data[field] : `No ${field} available`;
              }

              return (
                <span key={field}>
                  {/* Mostramos el nombre del campo en negrita y su contenido */}
                  <strong>
                    {field.charAt(0).toUpperCase() + field.slice(1)}:{" "}
                  </strong>
                  {content}
                </span>
              );
            }

            return null; // Si el campo es "image", "name" o "id", no lo mostramos
          })}
        </div>
      </div>
      {/* Enlace para volver a la página principal */}
      <Link className="card-details-link" to={`/`}>
        <button className="return-button">Return</button>
      </Link>
    </div>
  );
}

export default CardDetails;
