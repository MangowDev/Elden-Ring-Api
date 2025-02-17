import React, { useState } from "react";
import "./css/SearchParams.css";

function SearchParams({ setPage, setNumberElements }) {
  const [localPage, setLocalPage] = useState(0);
  const [localNumberElements, setLocalNumberElements] = useState(21);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(localPage);
    setNumberElements(localNumberElements);
  };

  const resetFilter = () =>{
    setLocalPage(0);
    setLocalNumberElements(21);
  }

  return (
    <form onSubmit={handleSubmit} className="main-search-params-div">
      <div>
        <label>Page number:</label>
        <input
          value={localPage}
          onChange={(e) => setLocalPage(e.target.value)}
          className="pages-input"
          type="number"
        />
      </div>
      <div>
        <label>Number of elements:</label>
        <input
          value={localNumberElements}
          onChange={(e) => setLocalNumberElements(e.target.value)}
          className="elements-input"
          type="number"
        />
      </div>
      <div>
        <input className="apply-input" type="submit" value="Apply" />
      </div>
      <div>
        <button className="apply-input" onClick={resetFilter}>Reset</button>
      </div>
    </form>
  );
}

export default SearchParams;
