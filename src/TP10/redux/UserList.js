import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./actions";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <div className="button-container">
        <button className="btn" onClick={() => navigate("/add-user")}>
          Add User
        </button>
      </div>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-details">
              <span>{user.name}</span> - <span>{user.email}</span>
            </div>
            <div className="action-buttons">
              <button
                className="btn btn-edit"
                onClick={() => navigate(`/update-user/${user.id}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-delete"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
