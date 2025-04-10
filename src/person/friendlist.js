import React from "react";
import { Person } from "./person";

export function FriendsList(props) {
  return (
    <div>
      <h3>Liste des amis :</h3>
      <ul>
        {props.friends.map((friend, index) => (
          <li key={index}>
            <Person name={friend.name} age={friend.age} />
          </li>
        ))}
      </ul>
    </div>
  );
}
