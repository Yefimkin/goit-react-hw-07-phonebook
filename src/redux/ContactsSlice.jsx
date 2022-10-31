import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-2', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-4', name: 'Rosie Simpson', number: '459-12-56' },
];

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.unshift({ id: nanoid(), ...action.payload });
    },

    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = ContactsSlice.actions;
export const getContacts = state => state.contacts;
