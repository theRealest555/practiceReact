import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser({ users, setUsers }) {
  const { id } = useParams();
  const user = users.find(u => u.id === id);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const navigate = useNavigate();

  const updateUser = () => {
    setUsers(users.map(u => (u.id === id ? { ...u, name, email } : u)));
    navigate("/");
  };

  return (
    <div>
      <h2>Update User</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={updateUser}>Update</button>
    </div>
  );
}

export default UpdateUser;
