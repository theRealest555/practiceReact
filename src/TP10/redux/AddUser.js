import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./actions";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Both fields are required!");
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
    };

    dispatch(addUser(newUser));
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter user's name"
            // value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label >Email</label>
          <input
            type="email"
            placeholder="Enter user's email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
