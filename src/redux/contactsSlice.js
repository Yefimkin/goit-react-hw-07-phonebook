import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './asyncThunk';

const initialState = {
  items: [],
  isLoading: false,
  addingLoader: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending](state) {
      state.addingLoader = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.addingLoader = false;
      state.error = null;
      state.items.unshift(payload);
      alert('Success!');
    },
    [addContact.rejected](state, { payload }) {
      state.addingLoader = false;
      state.error = payload;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.error = null;
      state.items = state.items.filter(item => item.id !== payload);
      alert('Deleted');
    },
    [deleteContact.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export const getContacts = state => state.contacts;