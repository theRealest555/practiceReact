import { legacy_createStore } from "redux";

const initialState = {
  users: [
    { id: "1", name: "Mohamed Allaoui", email: "allaoui@gmail.com" },
    { id: "2", name: "Hind Benanni", email: "benani@gmail.com" },
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

const store = legacy_createStore(rootReducer);

export default store;
