import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import fields from "./utils/Atributes.js";
import SearchParams from "./components/SearchParams.jsx";

function App() {
  const [call, setCall] = useState([]);
  const [section, setSection] = useState("items");
  const [numberElements, setNumberElements] = useState(21);
  const [page, setPage] = useState(0);
  const [url, setUrl] = useState(`https://eldenring.fanapis.com/api/${section}?limit=${numberElements}&page=${page}`);
  const fieldList = fields[section];

  useEffect(() => {
    setUrl(`https://eldenring.fanapis.com/api/${section}?limit=${numberElements}&page=${page}`);
  }, [section, numberElements, page]);
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCall(data.data);
      });
  }, [url]);

  const groupedData = [];
  for (let i = 0; i < call.length; i += 3) {
    groupedData.push(call.slice(i, i + 3));
  }

  return (
    <div className="content">
      <Header />
      <Navbar setSection={setSection} />
      <section className="main-card-section">
        <h2>List of {section}</h2>
        <SearchParams setPage={setPage} setNumberElements={setNumberElements}/>
        {groupedData.map((group, index) => (
          <div key={index} className="card-section">
            {group.map((data) => {
              const dynamicProps = fieldList.reduce((acc, field) => {
                acc[field] = data[field];
                return acc;
              }, {});

              return <Card key={data.id} {...dynamicProps} />;
            })}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;