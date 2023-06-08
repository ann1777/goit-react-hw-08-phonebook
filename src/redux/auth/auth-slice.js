import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import {
  registerUserThunk,
  logInUserThunk,
  logOutUserThunk,
  getCurrentUserThunk,
} from './auth-operations';

import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const customArrThunks = [registerUserThunk, logInUserThunk];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const fn = status => customArrThunks.map(el => el[status]);

const handlePending = state => {
  return state;
};

const handlePendingCurrentUser = state => {
  state.isRefreshing = true;
};

const handleRejected = state => {
  return state;
};

const handleRejectedCurrentUser = state => {
  state.isRefreshing = false;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleFulfilledCurrentUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    const { pending, fulfilled, rejected } = status;
    builder
      // .addCase(registerUser.pending, handlePending)
      // .addCase(registerUser.fulfilled, handleFulfilled)
      // .addCase(registerUser.rejected, handleRejected)
      // .addCase(logInUser.pending, handlePending)
      // .addCase(logInUser.fulfilled, handleFulfilled)
      // .addCase(logInUser.rejected, handleRejected)
      //.addCase(logOutUser.pending, handlePending)
      //.addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      // .addCase(logOutUser.rejected, handleRejected)
      //.addCase(getCurrentUser.pending, handlePendingCurrentUser)
      //.addCase(getCurrentUser.fulfilled, handleFulfilledCurrentUser)
      // .addCase(getCurrentUser.rejected, handleRejectedCurrentUser);

      .addCase(logOutUserThunk.pending, handlePending)
      .addCase(logOutUserThunk.fulfilled, handleFulfilledLogOut)
      .addCase(logOutUserThunk.rejected, handleRejected)
      .addCase(getCurrentUserThunk.pending, handlePendingCurrentUser)
      .addCase(getCurrentUserThunk.fulfilled, handleFulfilledCurrentUser)
      .addCase(getCurrentUserThunk.rejected, handleRejectedCurrentUser)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const authReducer = authSlice.reducer;
export default persistedAuthReducer;
