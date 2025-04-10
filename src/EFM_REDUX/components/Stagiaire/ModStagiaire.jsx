import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { modifierStagiaire } from "../../Redux/StagaireSlice";

const ModStagiaire = () => {
    const { nom } = useParams();
    const disPatch = useDispatch();
    const navigate = useNavigate();
    const stagiaire = useSelector (state=> state.stg.find((s)=>s.nom === nom))

    const [nvimg, setImg] = useState(stagiaire.image);
    const [nvnom, setNom] = useState(stagiaire.nom);
    const [nvprenom, setPrenom] = useState(stagiaire.prenom);
    const [nvfiliere, setFiliere] = useState(stagiaire.filiere);

    function handleModif(e) {
        e.preventDefault();
        const newStg = {
            image: nvimg,
            nom: nom,
            prenom: nvprenom,
            filiere: nvfiliere,
        };
        disPatch(modifierStagiaire([newStg]));
        navigate("/");
    }

    return (
        <div>
            <h1>Modifier stagiaire</h1>
            <form onSubmit={handleModif}>
                <input type="text" value={nvimg} onChange={(e) => setImg(e.target.value)} placeholder="saisir le lien de l'image" />
                <input type="text" value={nvnom} onChange={(e) => setNom(e.target.value)} placeholder="saisir le nom" />
                <input type="text" value={nvprenom} onChange={(e) => setPrenom(e.target.value)} placeholder="saisir le prenom" />
                <input type="text" value={nvfiliere} onChange={(e) => setFiliere(e.target.value)} placeholder="saisir la filiere" />
                <input type="submit" value="Modifier" />
            </form>
        </div>
    )
}

export default ModStagiaire;