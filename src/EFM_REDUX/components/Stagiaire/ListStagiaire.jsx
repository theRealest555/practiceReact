import React from 'react';
import { useSelector } from 'react-redux';
import './listStagiaire.css';
import Stagiaire from './Stagiaire';

const ListStagiaire = () => {
  const stagiaires = useSelector(state => state.stg);


  return (
    <div className="list-stagiaire">
      {stagiaires.map((s, index) => (
        <div key={index} className="stagiaire-card">
          <Stagiaire img={s.image} nom={s.nom} prenom={s.prenom} />
        </div>
      ))}
    </div>
  );
};

export default ListStagiaire;

