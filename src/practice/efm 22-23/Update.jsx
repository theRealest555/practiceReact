import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateStagiaire({ Stagiaires, setStagiaires }) {
    const { id } = useParams();
    const navigate = useNavigate();

    // Convert ID to a number for accurate comparison
    const stagiaire = Stagiaires.find(u => Number(u.id) === Number(id));

    // Redirect if stagiaire is not found
    useEffect(() => {
        if (!stagiaire) {
        alert("Stagiaire non trouvé !");
        navigate("/");
        }
    }, [stagiaire, navigate]);

    // State for form fields
    const [matricule, setMatricule] = useState(stagiaire?.matricule || "");
    const [name, setName] = useState(stagiaire?.name || "");
    const [codepostal, setCodepostal] = useState(stagiaire?.codepostal || "");
    const [ville, setVille] = useState(stagiaire?.ville || "");
    const [moyenne, setMoyenne] = useState(stagiaire?.moyenne || "");

    const updateStagiaire = (e) => {
        e.preventDefault(); // Prevent page reload

        if (!matricule || !name || !codepostal || !ville || moyenne === "" || moyenne < 0 || moyenne > 20) {
        alert("Veuillez remplir correctement tous les champs !");
        return;
        }

        setStagiaires(Stagiaires.map(u =>
        Number(u.id) === Number(id) ? { ...u, matricule, name, codepostal, ville, moyenne } : u
        ));

        navigate("/");
    };

    return (
        <div>
        <h2>Modifier Stagiaire</h2>
        <form onSubmit={updateStagiaire}>
            <input type="text" value={matricule} onChange={(e) => setMatricule(e.target.value)} placeholder="Matricule" />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" />
            <input type="text" value={codepostal} onChange={(e) => setCodepostal(e.target.value)} placeholder="Code postal" />
            <input type="text" value={ville} onChange={(e) => setVille(e.target.value)} placeholder="Ville" />
            <input type="number" value={moyenne} onChange={(e) => setMoyenne(e.target.value)} placeholder="Moyenne" min="0" max="20" step="0.01" />
            <button type="submit">Mettre à jour</button>
        </form>
        </div>
    );
}

export default UpdateStagiaire;
