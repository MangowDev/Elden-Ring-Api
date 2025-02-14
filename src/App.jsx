import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import fields from "./utils/Atributes.js";

function App() {
  const [call, setCall] = useState([]);
  const [section, setSection] = useState("items");
  const fieldList = fields[section];

  useEffect(() => {
    fetch(`https://eldenring.fanapis.com/api/${section}?limit=21`)
      .then((response) => response.json())
      .then((data) => {
        setCall(data.data);
      });
  }, [section]);

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

        {groupedData.map((group, index) => (
          <div key={index} className="card-section">
            {group.map((data) => {
              return (
                <Card
                  key={data.id}
                  image={data.image}
                  name={data.name}
                  description={data.description}
                />
              );
            })}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
