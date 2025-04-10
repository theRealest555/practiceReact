import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {SupprimerStagiaire} from '../../Redux/StagaireSlice';

export default function DetailStagiaire() {
    const {nom} = useParams();
    const stagiaire = useSelector (state=> state.stg.find((s)=>s.nom === nom))
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSupprimer = () => {
      dispatch(SupprimerStagiaire(stagiaire.id));
      navigate('/');
      }
  return (
    <div>
        <img src={stagiaire.image} alt='error'></img>
        <h3>Nom : {stagiaire.nom}</h3>
        <h3>Prenom : {stagiaire.prenom}</h3>
        <h3>filiere : {stagiaire.filiere}</h3>
        <button onClick={handleSupprimer}>Supprimer</button>
    </div>
  )
}