import React from "react";
import { Link } from "react-router-dom";
import './App.css';
function UserList({ users, setUsers }) {
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="actions">
                <button onClick={() => deleteUser(user.id)} className="delete-btn">Delete</button>
                <Link to={`/update-user/${user.id}`} className="update-btn">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add-user" className="add-btn">Add User</Link>
    </div>
  );
}

export default UserList;
