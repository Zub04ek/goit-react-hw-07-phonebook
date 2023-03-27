import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../data/contacts.json';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: initialContacts },
  reducers: {
    addContact: {
      reducer(state, action) {
        const isAlreadyInContacts = state.contacts.some(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (isAlreadyInContacts) {
          alert(`${action.payload.name} is already in contacts.`);
          return state;
        } else {
          return { contacts: [...state.contacts, action.payload] };
        }
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
