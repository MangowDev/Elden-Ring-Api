import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fields from "./utils/Atributes.js";
import "./CardDetails.css";

function CardDetails({ section }) {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://eldenring.fanapis.com/api/${section}/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      });
  }, [section, id]);

  const fieldList = fields[section];

  return (
    <div className="main-card-details">
      <div className="main-card-details-div">
        {data.image ? (
          <img src={data.image} alt={data.name} />
        ) : (
          <h2>No image available.</h2>
        )}
        <h3>{data.name}</h3>
        <div className="card-details-info">
          {fieldList.map((field) => {
            if (field !== "image" && field !== "name" && field !== "id") {
              return (
                <span key={field}>
                  <strong>
                    {field.charAt(0).toUpperCase() + field.slice(1)}:{" "}
                  </strong>
                  {data[field] ? data[field] : `No ${field} available`}
                </span>
              );
            }
            return null;
          })}
        </div>
      </div>
      <Link className="card-details-link" to={`/`}>
          <button className="return-button">Return</button>
        </Link>
    </div>
  );
}

export default CardDetails;
