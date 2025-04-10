import React, { useState } from "react";
import "./app.css";
import ChercheBar from "./ChercheBar";
import ResultatList from "./ResultatList";

const App = () => {
  const list = [
    { nom: "banane", type: "fruit" },
    { nom: "orange", type: "fruit" },
    { nom: "pomme", type: "fruit" },
    { nom: "raisins", type: "fruit" },
    { nom: "kiwi", type: "fruit" },
    { nom: "tomate", type: "legume" },
    { nom: "carotte", type: "legume" },
    { nom: "pomme de terre", type: "legume" },
    { nom: "navet", type: "legume" },
    { nom: "poivron", type: "legume" },
  ];

  const [type, setType] = useState("");

  const handleSearch = (value) => {
    setType(value);
  };

  const filteredList = list.filter((item) =>
    item.type.toLowerCase().includes(type.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="app-header">Filtrage des Produits</h1>
      <ChercheBar onSearch={handleSearch} />
      <div className="type-card">
        <p>
          Le type recherché :{" "}
          <strong>{type.toUpperCase() || "AUCUN"}</strong>
        </p>
      </div>
      <ResultatList list={filteredList} />
    </div>
  );
};

export default App;
