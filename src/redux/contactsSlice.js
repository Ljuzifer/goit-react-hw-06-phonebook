import { createSlice } from '@reduxjs/toolkit';

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

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
