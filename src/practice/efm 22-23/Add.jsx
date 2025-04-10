import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStagiaire({ Stagiaires, setStagiaires }) {
    const [matricule, setMatricule] = useState("");
    const [name, setName] = useState("");
    const [codepostal, setCodepostal] = useState("");
    const [ville, setVille] = useState("");
    const [moyenne, setMoyenne] = useState("");
    
    const navigate = useNavigate();

    const getNextId = () => {
        if (Stagiaires.length === 0) return 1; // If no stagiaires, start with ID 1
        return Math.max(...Stagiaires.map(stagiaire => Number(stagiaire.id))) + 1;
    };

    const addStagiaire = (e) => {
        e.preventDefault();
        if (!matricule || !name || !ville || !codepostal || moyenne === "" || moyenne < 0 || moyenne > 20) return;

        const newStagiaire = {
        id: String(getNextId()),
        matricule,
        name,
        codepostal,
        ville,
        moyenne: Number(moyenne),
        };
        setStagiaires([...Stagiaires, newStagiaire]);

        setMatricule("");
        setName("");
        setCodepostal("");
        setVille("");
        setMoyenne("");

        navigate("/");
    };

    return (
        <div>
        <h2>Add Stagiaire</h2>
        <form onSubmit={addStagiaire}>
            <input type="text" placeholder="Matricule" onChange={(e) => setMatricule(e.target.value)} />
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Code postal" onChange={(e) => setCodepostal(e.target.value)} />
            <input type="text" placeholder="Ville" onChange={(e) => setVille(e.target.value)} />
            <input type="text" placeholder="Moyenne" step="0.01" min="0" max="20" onChange={(e) => setMoyenne(e.target.value)} />
            <button type="submit">Ajouter</button>
        </form>
        </div>
    );
}

export default AddStagiaire;
