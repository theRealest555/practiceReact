import React, { useState } from "react";
import { Link } from "react-router-dom";

function StagiaireList({ Stagiaires, setStagiaires }) {
    const [villeFilter, setVilleFilter] = useState("");
    const [nameFilter, setNameFilter] = useState("");
    const [filteredStagiaires, setFilteredStagiaires] = useState(Stagiaires);

    // Compute statistics (use filtered list)
    const max = Math.max(...Stagiaires.map(s => s.moyenne), 0);
    const min = Math.min(...Stagiaires.map(s => s.moyenne), 20);
    const avg = Stagiaires.length > 0 
        ? Stagiaires.reduce((acc, s) => acc + Number(s.moyenne), 0) / Stagiaires.length 
        : 0;

    // Delete function with confirmation
    const deleteStagiaire = (id) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce stagiaire ?")) {
            const newList = Stagiaires.filter(stagiaire => stagiaire.id !== id);
            setStagiaires(newList);
            setFilteredStagiaires(newList);
        }
    };

    // Filter function
    const applyFilter = () => {
        const filtered = Stagiaires.filter(stagiaire =>
            stagiaire.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
            stagiaire.ville.toLowerCase().includes(villeFilter.toLowerCase())
        );
        setFilteredStagiaires(filtered);
    };

    // Reset filter function
    const resetFilter = () => {
        setVilleFilter("");
        setNameFilter("");
        setFilteredStagiaires(Stagiaires);
    };

    return (
        <div className="stagiaire-list">
            <h2>Liste des Stagiaires</h2>

            {/* Filter Inputs */}
            <div className="filter-section">
                <input
                    type="text"
                    placeholder="Filtrer par nom"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Filtrer par ville"
                    value={villeFilter}
                    onChange={(e) => setVilleFilter(e.target.value)}
                />
                <button onClick={applyFilter}>Filtrer</button>
                <button onClick={resetFilter}>Réinitialiser</button>
            </div>

            {/* Table */}
            <table className="stagiaire-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Matricule</th>
                        <th>Nom</th>
                        <th>Code Postal</th>
                        <th>Ville</th>
                        <th>Moyenne</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStagiaires.length > 0 ? (
                        filteredStagiaires.map(stagiaire => (
                            <tr key={String(stagiaire.id)}>
                                <td>{stagiaire.id}</td>
                                <td>{stagiaire.matricule}</td>
                                <td>{stagiaire.name}</td>
                                <td>{stagiaire.codepostal}</td>
                                <td>{stagiaire.ville}</td>
                                <td>{stagiaire.moyenne}</td>
                                <td className="actions">
                                    <button onClick={() => deleteStagiaire(stagiaire.id)} className="delete-btn">Supprimer</button>
                                    <Link to={`/update-stagiaire/${stagiaire.id}`} className="update-btn">Modifier</Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" style={{ textAlign: "center" }}>Aucun stagiaire trouvé</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Statistics */}
            <ul>
                <li>Moyenne la plus élevée : {max}</li>
                <li>Moyenne la moins élevée : {min}</li>
                <li>Moyenne de la classe : {avg}</li>
            </ul>

            <Link to="/add-stagiaire" className="add-btn">Ajouter un Stagiaire</Link>
        </div>
    );
}

export default StagiaireList;
