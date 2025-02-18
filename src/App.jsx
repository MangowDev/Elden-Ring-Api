import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import fields from "./utils/Atributes.js"; // Importamos los campos que se usarán en las cards (atributos)
import SearchParams from "./components/SearchParams.jsx";
import CardDetails from "./CardDetails.jsx";

function App() {
  const [call, setCall] = useState([]); // Estado para almacenar los datos obtenidos de la API
  const [section, setSection] = useState("items"); // Estado para almacenar la sección seleccionada (por defecto "items")
  const [numberElements, setNumberElements] = useState(21); // Estado para controlar cuántos elementos mostrar
  const [page, setPage] = useState(0); // Estado para controlar la página actual de la API
  const [url, setUrl] = useState(
    `https://eldenring.fanapis.com/api/${section}?limit=${numberElements}&page=${page}`
  ); // URL para hacer las peticiones a la API
  const fieldList = fields[section]; // Obtenemos los campos que corresponden a la sección actual

  // useEffect para actualizar la URL cuando cambian los valores de section, numberElements o page
  useEffect(() => {
    setUrl(
      `https://eldenring.fanapis.com/api/${section}?limit=${numberElements}&page=${page}`
    );
  }, [section, numberElements, page]);

  // useEffect para realizar la petición a la API y almacenar los datos en el estado "call"
  useEffect(() => {
    fetch(url)
      .then((response) => response.json()) // Convertimos la respuesta a JSON
      .then((data) => {
        setCall(data.data); // Guardamos los datos obtenidos en el estado "call"
      });
  }, [url]); // Se ejecuta cada vez que la URL cambie

  // Agrupamos los datos en grupos de 3 para poder mostrarlos en el diseño
  const groupedData = [];
  for (let i = 0; i < call.length; i += 3) {
    groupedData.push(call.slice(i, i + 3)); // Creamos grupos de 3 elementos
  }

  return (
    <Router>
      {" "}
      {/* Contenedor de la aplicación que permite la navegación entre rutas */}
      <div className="content">
        <Header />
        {/* Componente Navbar que permite cambiar la sección */}
        <Navbar setSection={setSection} />
        <Routes>
          {/* Ruta principal que muestra una lista de "cards" */}
          <Route
            path="/"
            element={
              <section className="main-card-section">
                <h2>List of {section}</h2>
                {/* Componente para filtrar la búsqueda */}
                <SearchParams
                  setPage={setPage}
                  setNumberElements={setNumberElements}
                />
                {/* Mostramos los datos agrupados en "cards" (Esto fue con ayuda de la IA) */}
                {groupedData.map((group, index) => (
                  <div key={index} className="card-section">
                    {/* Mapeamos cada grupo de datos y los pasamos como propiedades a cada Card*/}
                    {group.map((data) => {
                      // Preparamos las propiedades dinámicas para cada card
                      const dynamicProps = fieldList.reduce((acc, field) => {
                        acc[field] = data[field]; // Asignamos el valor de cada campo al objeto de propiedades
                        return acc;
                      }, {});

                      // Devolvemos un componente Card por cada dato en el grupo
                      return (
                        <Card key={data.id} id={data.id} {...dynamicProps} />
                      );
                    })}
                  </div>
                ))}
              </section>
            }
          />
          {/* Ruta para ver los detalles de una card específica, basada en su id */}
          <Route path="/card/:id" element={<CardDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
