import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import * as mockApi from 'services/mock-api';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      // const { data } = await mockApi.fetchContacts();
      const { data } = await axios.get('contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      // const newContact = await mockApi.postContacts(contact);
      console.log(contact);
      const { data } = await axios.post('contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      // await mockApi.deleteContacts(id);
      await axios.delete(`contacts/${id}`);
      dispatch(fetchContactsThunk());
      // return id;
    } catch (error) {
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
