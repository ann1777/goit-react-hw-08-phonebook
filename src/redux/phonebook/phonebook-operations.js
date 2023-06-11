import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import { getAllContacts, addContact, deleteContact } from 'services/contacts-services'

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getAllContacts();
      return contacts;
    } catch (error) {
      toast.error('Oops! Something went wrong... Getting contacts failed', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      // const newContact = await mockApi.postContacts(contact);
      const contact = await addContact(newContact);
      return contact;
    } catch (error) {
      toast.error('Oops! Something went wrong... Creating new contact failed', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      // await mockApi.deleteContacts(id);
      await deleteContact(id);
      dispatch(fetchContactsThunk());
      return id;
    } catch (error) {
      toast.error('Oops! Something went wrong... Delete contact failed', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const loading = thunkAPI.getState().contacts.isLoading;
      if (loading) {
        return false;
      }
    },
  }
);

export const isDublicated = (contacts, { name, number }) => {
  const normalizedName = name.toLowerCase().trim();
  const normalizedNumber = number.trim();

  const dublicate = contacts.some(
    contact =>
      contact.name.toLowerCase().trim() === normalizedName ||
      contact.number.trim() === normalizedNumber
  );
  return dublicate;
};
