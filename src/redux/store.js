import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filtersReducer } from './reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
