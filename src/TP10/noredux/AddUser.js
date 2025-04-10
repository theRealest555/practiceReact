import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser({ users, setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const addUser = () => {
    const newUser = {
      id: String(users.length + 1),
      name,
      email,
    };
    setUsers([...users, newUser]);
    navigate("/");
  };

  return (
    <div>
      <h2>Add User</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={addUser}>Add</button>
    </div>
  );
}

export default AddUser;
