import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import fields from "./utils/Atributes.js"; // Importamos los campos que se usarán en las cards (atributos)
import SearchParams from "./components/SearchParams.jsx";
import CardDetails from "./CardDetails.jsx";
import Footer from "./components/Footer.jsx";
import PageNavigator from "./components/PageNavigator.jsx";
import EldenIconLoading from "./assets/images/EldenIconBig.png";
import EldenMap from "./EldenMap.jsx";

function App() {
  const [call, setCall] = useState([]); // Estado para almacenar los datos obtenidos de la API
  const [section, setSection] = useState(
    localStorage.getItem("section") || "items"
  ); // Estado para almacenar la sección seleccionada (por defecto "items")
  const [numberElements, setNumberElements] = useState(18); // Estado para controlar cuántos elementos mostrar
  const [page, setPage] = useState(0); // Estado para controlar la página actual de la API
  const [url, setUrl] = useState(
    `https://eldenring.fanapis.com/api/${section}?limit=${numberElements}&page=${page}`
  ); // URL para hacer las peticiones a la API
  const [loading, setLoading] = useState(false); // Estado para manejar la carga
  const fieldList = fields[section]; // Obtenemos los campos que corresponden a la sección actual

  useEffect(() => {
    if (localStorage.getItem("page") === null) {
      localStorage.setItem("page", 0);
    }

    if (localStorage.getItem("numberElements") === null) {
      localStorage.setItem("numberElements", 18);
    }

    localStorage.setItem("page", page);
    localStorage.setItem("numberElements", numberElements);
  }, [numberElements, page]);

  // useEffect para actualizar la URL cuando cambian los valores de section, numberElements o page
  useEffect(() => {
    setUrl(
      `https://eldenring.fanapis.com/api/${section}?limit=${numberElements}&page=${page}`
    );
    localStorage.setItem("section", section); // Actualizamos el localStorage
  }, [section, numberElements, page]);

  // useEffect para realizar la petición a la API y almacenar los datos en el estado "call"
  useEffect(() => {
    setLoading(true); // Activar el estado de carga antes de hacer la petición

    fetch(url)
      .then((response) => response.json()) // Convertimos la respuesta a JSON
      .then((data) => {
        setCall(data.data); // Guardamos los datos obtenidos en el estado "call"
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false); // Desactivar el estado de carga cuando termina la petición
      });
  }, [url]); // Se ejecuta cada vez que la URL cambie

  // Agrupamos los datos en grupos de 3 para poder mostrarlos en el diseño
  const groupedData = [];
  for (let i = 0; i < call.length; i += 3) {
    groupedData.push(call.slice(i, i + 3)); // Creamos grupos de 3 elementos
  }

  return (
    <Router>
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
                {/* Título de la sección con el nombre dinámico de la categoría actual */}
                <h2>List of {section}</h2>

                {/* Componente de búsqueda y filtrado que permite modificar la página y la cantidad de elementos */}
                <SearchParams
                  page={page}
                  setPage={setPage}
                  setNumberElements={setNumberElements}
                />

                {/* Si la información aún se está cargando, se muestra un mensaje indicándolo */}
                {loading ? (
                  <div className="loading-div"><img src={EldenIconLoading} alt="Elden-icon-loading"></img><span>Loading...</span></div> 
                  /* Se muestra mientras se obtienen los datos */
                ) : (
                  /* Si los datos ya están disponibles, se agrupan y se renderizan en tarjetas */
                  groupedData.map((group, index) => (
                    <div key={index} className="card-section">
                      {/* Se recorre cada grupo de datos y se crean las tarjetas dinámicamente */}
                      {group.map((data) => {
                        // Se genera un objeto con las propiedades dinámicas necesarias para cada Card
                        const dynamicProps = fieldList.reduce((acc, field) => {
                          acc[field] = data[field]; // Asigna cada atributo al objeto de propiedades
                          return acc;
                        }, {});

                        // Se devuelve un componente Card con los datos obtenidos de la API
                        return <Card key={data.id} id={data.id} {...dynamicProps} />;
                      })}
                    </div>
                  ))
                )}

                {/* Componente para navegar entre páginas de resultados */}
                <PageNavigator page={page} setPage={setPage} />
              </section>
            }
          />
          {/* Ruta para ver los detalles de una card específica, basada en su id */}
          <Route path="/card/:id" element={<CardDetails sections={section} />} />
          <Route path="/map" element={<EldenMap/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
