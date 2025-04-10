import React from 'react';
import { Link } from 'react-router-dom';
import './Stagiaire.css';

const Stagiaire = ({img, nom, prenom }) => {

  
  return (
    <div className="stagiaire">
      <Link to={`/stg-detail/${nom}`}>
                <img src={img} alt='error'></img>
      </Link>
      <h3>{nom} {prenom}</h3>
   </div>
  );
};

export default Stagiaire;
