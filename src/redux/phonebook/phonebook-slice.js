import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './phonebook-operations';

export const contactsSlice = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [fetchContactsThunk.fulfilled]: (_, { payload }) => payload,
  
    [addContactThunk.fulfilled]: (state, { payload }) => [payload, ...state],
      
    [deleteContactThunk.fulfilled]: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
      },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { setFilterValue: (_, { payload }) => payload, },
});

export const { setFilterValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;


// const errorSlice = createSlice({
//   name: 'error',
//   initialState: null,
//   extraReducers: {
//     [fetchContactsThunk.pending]: () => null,
//     [fetchContactsThunk.rejected]: (_, action) => action.error.message,

//     [addContactThunk.pending]: () => null,
//     [addContactThunk.rejected]: (_, action) => action.error.message,

//     [deleteContactThunk.pending]: () => null,
//     [deleteContactThunk.rejected]: (_, action) => action.error.message,
//   },
// });

// const loadingSlice = createSlice({
//   name: 'isLoading',
//   initialState: false,
//   extraReducers: {
//     [fetchContactsThunk.pending]: () => true,
//     [fetchContactsThunk.fulfilled]: () => false,
//     [fetchContactsThunk.rejected]: () => false,

//     [addContactThunk.pending]: () => true,
//     [addContactThunk.fulfilled]: () => false,
//     [addContactThunk.rejected]: () => false,

//     [deleteContactThunk.pending]: () => true,
//     [deleteContactThunk.fulfilled]: () => false,
//     [deleteContactThunk.rejected]: () => false,
//   },
// });

export const contactsReducer = contactsSlice.reducer;
