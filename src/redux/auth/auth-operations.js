import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  userLogin,
  userSignUp,
  userLogout,
  userCurrent,
} from 'services/auth-services';

export const registerUserThunk = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await userSignUp(credentials);
      toast.success('Successfully registered!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      console.log('register:', data);
      return data;
    } catch ({ error }) {
      return rejectWithValue(`Oops! Something went wrong...`, error.message);
    }
  }
);

export const logInUserThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await userLogin(credentials);
      toast.success('Successfully logged!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      console.log('login:', data);
      return data;
    } catch (error) {
      toast.error('Oops! Something went wrong... Login failed', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUserThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await userLogout();
      toast.success('Successfully logout!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      //console.log('logout:', data);
    } catch (error) {
      toast.error('Oops! Something went wrong... Logout failed', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      return rejectWithValue(`Oops! Something went wrong...`, error.message);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const savedToken = state.auth.token;
      if (savedToken === null) return rejectWithValue();
      const { data } = await userCurrent(savedToken);
      console.log('currentUser:', data);
      return data;
    } catch (error) {
      toast.error('Oops! Something went wrong... Get current user failed', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      return rejectWithValue(`Oops! Something went wrong...`, error.message);
    }
  }
  // {
  //   condition: (_, { getState }) => {
  //     const {
  //       auth: { token },
  //     } = getState();

  //     if (!token) {
  //       return false;
  //     }
  //   },
  // }
);
