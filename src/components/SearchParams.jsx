import React, { useState } from "react";
import "./css/SearchParams.css";

function SearchParams({ setPage, setNumberElements }) {
  // Definimos los estados locales para la página y el número de elementos
  const [localPage, setLocalPage] = useState(0); // Estado para la página
  const [localNumberElements, setLocalNumberElements] = useState(21); // Estado para el número de elementos por página

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento predeterminado del formulario (recarga de página)
    setPage(localPage); // Actualizamos la página en el estado global
    setNumberElements(localNumberElements); // Actualizamos el número de elementos por página en el estado global
  };

  // Función para restablecer los filtros (página y número de elementos)
  const resetFilter = () => {
    setLocalPage(0); // Restablecemos la página a 0
    setLocalNumberElements(21); // Restablecemos el número de elementos a 21
  };

  return (
    // El formulario donde el usuario puede ingresar parámetros de búsqueda
    <form onSubmit={handleSubmit} className="main-search-params-div">
      <div>
        <label>Page number:</label>
        <input
          value={localPage} // Valor del campo de número de página, vinculado al estado local
          onChange={(e) => setLocalPage(e.target.value)} // Actualiza el estado local de la página cuando el usuario cambia el valor
          className="pages-input"
          type="number" 
        />
      </div>
      <div>
        <label>Number of elements:</label>
        <input
          value={localNumberElements} // Valor del campo de número de elementos, vinculado al estado local
          onChange={(e) => setLocalNumberElements(e.target.value)} // Actualiza el estado local de los elementos cuando el usuario cambia el valor
          className="elements-input" 
          type="number" 
        />
      </div>
      <div>
        <input className="apply-input" type="submit" value="Apply" /> {/* Botón para aplicar los cambios */}
      </div>
      <div>
        <button className="apply-input" onClick={resetFilter}> {/* Botón para restablecer los filtros */}
          Reset
        </button>
      </div>
    </form>
  );
}

export default SearchParams;
