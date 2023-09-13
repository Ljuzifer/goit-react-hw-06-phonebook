import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, searchFilter } from './actionsNotUsed';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(person => person.id !== action.payload);
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [searchFilter]: (_state, action) => {
    return (_state = `${action.payload}`);
  },
});
