import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },

    deleteContact: (state, action) => {
      return state.filter(person => person.id !== action.payload);
    },
  },
});

export const persistConfig = {
  key: 'contacts-list',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
