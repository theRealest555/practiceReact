import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";

const initialUsers = [
    { id: "1", name: "Mohamed Allaoui", email: "allaoui@gmail.com" },
    { id: "2", name: "Hind Benanni", email: "benani@gmail.com" },
  ];
  
function App() {
  const [users, setUsers] = useState(initialUsers);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
        <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers} />} />
        <Route path="/update-user/:id" element={<UpdateUser users={users} setUsers={setUsers} />} />
      </Routes>
    </Router>
  );
}

export default App;
