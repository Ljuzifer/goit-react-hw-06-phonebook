import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');

export const deleteContact = createAction('contacts/deleteContact');

export const searchFilter = createAction('filter/searchFilter');
