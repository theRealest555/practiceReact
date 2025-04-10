import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AjouterStagiaire } from '../../Redux/StagaireSlice';
import { useNavigate } from 'react-router-dom';

export default function AddStagiaire() {
    const [img, setImg] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [filiere, setFiliere] = useState('');
    const disPatch = useDispatch();
    const navigate = useNavigate();
    function handleAjoute(e){
        e.preventDefault()
        const newStg = {image : img, nom : nom, prenom : prenom, filiere : filiere};
        disPatch(AjouterStagiaire([newStg]));
        navigate('/');
    }
  return (
    <div>
        <form onSubmit={handleAjoute}>
            <input type='text' onChange={(e)=>setImg(e.target.value)} placeholder='saisir le lien de l"image'/><br/><br/>
            <input type='text' onChange={(e)=>setNom(e.target.value)} placeholder='saisir le nom'/><br/><br/>
            <input type='text' onChange={(e)=>setPrenom(e.target.value)} placeholder='saisir le prenom'/><br/><br/>
            <input type='text' onChange={(e)=>setFiliere(e.target.value)} placeholder='saisir la filiere'/><br/><br/>
            <input type="submit" value="Ajouter" />
        </form>
    </div>
  )
}