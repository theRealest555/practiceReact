import React from "react";
import "./app.css";

const ResultatList = ({ list }) => {
  return (
    <div className="result-list">
      <h3>Liste des Résultats</h3>
      <ul>
        {list.length > 0 ? (
          list.map((item, index) => (
            <li key={index}>{item.nom}</li>
          ))
        ) : (
          <li className="no-results">Aucun résultat trouvé</li>
        )}
      </ul>
    </div>
  );
};

export default ResultatList;
