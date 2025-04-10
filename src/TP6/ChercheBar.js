import React, { useState } from "react";
import "./app.css";

const ChercheBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className="search-bar">
      <h3>Recherche</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Ex: légume, fruit..."
        />
        <div className="button-container">
          <button type="submit">Chercher</button>
        </div>
      </form>
    </div>
  );
};

export default ChercheBar;
