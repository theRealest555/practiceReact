import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import UserList from "./UserList";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import "./styles.css"

const App2 = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App2;
