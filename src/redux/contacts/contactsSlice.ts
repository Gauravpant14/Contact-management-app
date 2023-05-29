import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../types";

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = [ ...action.payload];
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { _id } = action.payload;
      const existingContact = state.contacts.find(
        (contact) => contact._id === _id
      );
      if (existingContact) {
        Object.assign(existingContact, action.payload);
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.contacts = state.contacts.filter((contact) => contact.id !== id);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
