import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userId, setUserId] = useState("");
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        setUtilisateurs(users);
      });
  }, []);

  const fetchUserById = () => {
    if (!userId) {
      setUserData("svp choisir un id valide !!!!");
      return;
    }

    const user = utilisateurs.find((u) => u.id === parseInt(userId, 10));

    if (user) {
      setUserData(user);
    } else {
      setUserData("svp choisir un id valide !!!!");
    }
  };

  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchUserById();
    }
  };

  return (
    <div className="App">
      <h1>Consommation de l'API</h1>
      <div>
        <label>
          Saisissez l'ID de l'utilisateur :
          <input
            type="number"
            value={userId}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress} 
            placeholder="Entrez un ID"
          />
        </label>
        <button onClick={fetchUserById}>Rechercher</button>
      </div>

      {typeof userData === "string" ? (
        <p style={{ color: "red" }}>{userData}</p>
      ) : (
        userData && (
          <div className="user-info">
            <h2>Informations de l'Utilisateur</h2>
            <p>
              <strong>Nom:</strong> {userData.name}
            </p>
            <p>
              <strong>Username:</strong> {userData.username}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Téléphone:</strong> {userData.phone}
            </p>
            <p>
              <strong>Site Web:</strong> {userData.website}
            </p>
          </div>
        )
      )}
    </div>
  );
}

export default App;
