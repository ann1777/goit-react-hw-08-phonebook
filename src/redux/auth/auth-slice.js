import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registerUserThunk,
  logInUserThunk,
  logOutUserThunk,
  getCurrentUserThunk,
} from './auth-operations';
import actions from 'redux/phonebook/phonebook-actions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isFetchCurrentUser: false,
  isLoading: false,
};

const customArrThunks = [registerUserThunk, logInUserThunk];

const status = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

const fn = status => customArrThunks.map(el => el[status]);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    const { pending, fulfilled, rejected } = status;
    builder
    .addCase(logOutUserThunk.pending, state => {
      state.error = null;
      state.isLoading = true;
      return state;})
    .addCase(logOutUserThunk.rejected, state => {
      state.isLoading = false;
      state.error = actions.error.message;
      return state;})
    .addCase(logOutUserThunk.fulfilled, (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      return state;})
    .addCase(getCurrentUserThunk.pending, (state, _) => {
      state.isFetchCurrentUser = true;
      state.isLoading = true;
      return state;})
    .addCase(getCurrentUserThunk.rejected, (state, _) => {
      state.isFetchCurrentUser = false;
      state.isLoading = false;
      return state;})
    .addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchCurrentUser = false;
      state.isLoading = false;
      return state;})
    .addMatcher(isAnyOf(...fn(pending)), state => {
      state.error = null;
      state.isLoading = true;
      return state;})
    .addMatcher(isAnyOf(...fn(fulfilled)), (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      return state;})
    .addMatcher(isAnyOf(...fn(rejected)), state => {
      state.isLoading = false;
      state.error = true;
      return state;})    
  },
});

export default authSlice.reducer;
