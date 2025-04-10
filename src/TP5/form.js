import React, { useState } from 'react';

export default function Form() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [ville, setVille] = useState('');
  const [genre, setGenre] = useState('');
  const [loisir, setLoisir] = useState([]);
  const [image, setImage] = useState('');
  const [result, setResult] = useState('');

  const handleLoisir = (e) => {
    const value = e.target.value;
    setLoisir((prevLoisir) =>
      prevLoisir.includes(value)
        ? prevLoisir.filter((item) => item !== value)
        : [...prevLoisir, value]
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setResult('Je suis Mr/Mme ${user}, né(e) le ${date} à ${ville}, et mes loisirs sont : ${loisir.join(', ')}.');
  };

  return (
    <div className="col">
      <form onSubmit={handleOnSubmit}>
        <label>Identifiant</label><br />
        <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
        /><br /><br />

        <label>Mot de passe</label><br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <label>Date de naissance</label><br />
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
        /><br /><br />

        <label>Ville</label><br />
        <select onChange={(e) => setVille(e.target.value)}>
          <option value="Tanger">Tanger</option>
          <option value="Casablanca">Casablanca</option>
        </select><br /><br />

        <label>Genre</label><br />
        <input
          type="radio"
          name="genre"
          value="H"
          onChange={(e) => setGenre(e.target.value)}
        /> Homme<br />
        <input
          type="radio"
          name="genre"
          value="F"
          onChange={(e) => setGenre(e.target.value)}
        /> Femme<br /><br />

        <label>Loisirs</label><br />
        <input
          type="checkbox"
          value="Sport"
          onChange={handleLoisir}
        /> Sport<br />
        <input
          type="checkbox"
          value="Lecture"
          onChange={handleLoisir}
        /> Lecture<br />
        <input
          type="checkbox"
          value="Musique"
          onChange={handleLoisir}
        /> Musique<br /><br />

        <label>Photo</label><br />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        /><br /><br />

        <input type="submit" />
      </form>

      <h3>{result}</h3>
    </div>
  );
}