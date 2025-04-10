import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStagiaire from "./Add";
import StagiaireList from "./List";
import UpdateStagiaire from "./Update";

const initialStagiaires = [
    { id: "1",matricule: "1454", name: "Mohamed Allaoui",codepostal: "20400", ville: "casa", moyenne : "12.56" },
    { id: "2",matricule: "1455", name: "Mohamed Manssouri",codepostal: "20400", ville: "casa", moyenne : "14.56" },
  ];
  
function App() {
  const [Stagiaires, setStagiaires] = useState(initialStagiaires);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StagiaireList Stagiaires={Stagiaires} setStagiaires={setStagiaires} />} />
        <Route path="/add-Stagiaire" element={<AddStagiaire Stagiaires={Stagiaires} setStagiaires={setStagiaires} />} />
        <Route path="/update-Stagiaire/:id" element={<UpdateStagiaire Stagiaires={Stagiaires} setStagiaires={setStagiaires} />} />
      </Routes>
    </Router>
  );
}

export default App;
