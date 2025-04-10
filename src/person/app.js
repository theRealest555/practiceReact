import React from "react";
import { Greeting } from "./greeting";
import { Person } from "./person";
import { FriendsList } from "./friendlist";

function App() {
  const friends = [
    { name: "Ali", age: 25 },
    { name: "Mouna", age: 22 },
    { name: "Said", age: 30 },
  ];

  return (
    <div>
      <Greeting name="Ahmed" />
      <Person name="Youssef" age={28} />
      <FriendsList friends={friends} />
    </div>
  );
}

export default App;
