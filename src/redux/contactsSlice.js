import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
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

const persistConfig = {
  key: 'contacts-list',
  storage,
};

// export const contactsReducer = contactsSlice.reducer;
export const persistedContacts = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact } = contactsSlice.actions;
