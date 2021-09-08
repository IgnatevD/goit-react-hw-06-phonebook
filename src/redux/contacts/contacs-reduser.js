/** @format */

import { combineReducers } from "redux";

const contactsState = [];
const filterState = "";

const reducerContats = (state = contactsState, { type, payload }) => {
  switch (type) {
    case "add_Contact":
      return [...state, payload];
    case "delete_Contact":
      return state.filter((contact) => contact.id !== payload.id);
    default:
      return state;
  }
};

const reducerFilter = (state = filterState, { type, payload }) => {
  switch (type) {
    case "filter_contact":
      return payload;
    default:
      return state;
  }
};

// const reducer = (state = initState, { type, payload }) => {
//   switch (type) {
//     case "add_Contact":
//       return [...state.contacts, ...payload];
//     case "delete_Contact":
//       return state.filter((contact) => contact.id !== payload.id);
//     default:
//       return state;
//   }
// };

export default combineReducers({
  contacts: reducerContats,
  filter: reducerFilter,
});
