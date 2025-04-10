import React, { useState, useEffect } from "react";
import "./App2.css";

function App2() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const fetchUserPosts = (userId) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const userPosts = data.filter((post) => post.userId === userId);
        setPosts((prevPosts) => ({ ...prevPosts, [userId]: userPosts }));
      })
  };

  const collapseUserPosts = (userId) => {
    setPosts((prevPosts) => {
      const newPosts = { ...prevPosts };
      delete newPosts[userId]; 
      return newPosts;
    });
  };

  return (
    <div className="App">
      <h1>Liste des Utilisateurs et leurs Posts</h1>
      <div className="users-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>

            <div>
              <button onClick={() => fetchUserPosts(user.id)}>
                Détails Posts
              </button>
              <button
                onClick={() => collapseUserPosts(user.id)}
                style={{ marginLeft: "10px", backgroundColor: "#e74c3c" }}
              >
                Réduire Posts
              </button>
            </div>

              {posts[user.id] && (
              <div className="posts-container">
                <h3>Posts:</h3>
                <ul>
                  {posts[user.id].map((post) => (
                    <li key={post.id}>
                      <strong>{post.title}</strong>
                      <p>{post.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App2;