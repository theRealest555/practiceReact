import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "./actions";

const UpdateUser = () => {
const { id } = useParams();
const users = useSelector((state) => state.users);
const user = users.find((user) => user.id === id);
const [name, setName] = useState(user.name);
const [email, setEmail] = useState(user.email);
const dispatch = useDispatch();
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, name, email }));
    navigate("/");
};

  return (
    <div className="container">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn" type="submit">
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
