import { createSlice } from '@reduxjs/toolkit';
import {
  userSignUp,
  userLogin,
  userLogout,
  userCurrent,
} from '../../services/auth-services';

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isFetchCurrentUser: false,
  isLoading: false,
  //   isLoggedIn: false,
  //   isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [userSignUp.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [userLogin.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [userLogout.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [userCurrent.pending]: (state, _) => {
      state.isFetchCurrentUser = true;
      state.isLoading = true;
    },

    [userSignUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [userLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [userLogout.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [userCurrent.rejected]: (state, _) => {
      state.isFetchCurrentUser = false;
      state.isLoading = false;
    },

    [userSignUp.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [userLogin.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [userLogout.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    [userCurrent.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchCurrentUser = false;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
