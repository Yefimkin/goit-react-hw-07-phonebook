import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './acyncThunk';

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
      alert('ADDED !');
    },
    [addContact.rejected](state, { payload }) {
      state.addingLoader = false;
      state.error = payload;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.error = null;
      state.items = state.items.filter(item => item.id !== payload);
      alert('DELETED !');
    },
    [deleteContact.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export const getContacts = state => state.contacts;

// const initialState = [
//   { id: 'id-1', name: 'Annie Copeland', number: '227-91-26' },
//   { id: 'id-2', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-4', name: 'Rosie Simpson', number: '459-12-56' },
// ];

// export const ContactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact(state, action) {
//       state.unshift({ id: nanoid(), ...action.payload });
//     },

//     deleteContact(state, action) {
//       return state.filter(item => item.id !== action.payload);
//     },
//   },
// });
// export const { addContact, deleteContact } = ContactsSlice.actions;
// export const getContacts = state => state.contacts;
