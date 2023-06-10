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
  async (data, { rejectWithValue }) => {
    try {
      const result = await userSignUp(data);
      toast.success('Successfully registered!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      console.log('register:', result);
      return result;
    } catch ({ error }) {
      return rejectWithValue(`Oops! Something went wrong...`, error.message);
    }
  }
);

export const logInUserThunk = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userLogin(data);
      toast.success('Successfully logged!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      console.log('login:', result);
      return result;
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
      const { data } = await userLogout();
      toast.success('Successfully logout!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      //console.log('logout:', data);
      return data;
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
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const { data } = await userCurrent(token);
      console.log('currentUser:', data);
      return data;
    } catch (error) {
      toast.error('Oops! Something went wrong... Get current user failed', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      return rejectWithValue(`Oops! Something went wrong...`, error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();

      if (!token) {
        return false;
      }
    },
  }
);
