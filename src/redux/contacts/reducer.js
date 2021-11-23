import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { fetchContacts } from "./operations";

import actions from "./actions";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [actions.addItem]: (state, { payload }) => {
    if (state.find((contact) => contact.name === payload.name)) {
      alert(payload.name + " is already in contacts");
      return state;
    }
    const newContactsList = [...state, payload];
    localStorage.setItem("contacts", JSON.stringify(newContactsList));
    return newContactsList;
  },
  [actions.deleteItem]: (state, { payload }) => {
    const newList = state.filter((contact) => contact.id !== payload);
    localStorage.setItem("contacts", JSON.stringify(newList));
    return newList;
  },
});

const filter = createReducer("", {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
