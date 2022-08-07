import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.registerUser.rejected](state, action) {
      state.error = 'Email adress is already registered or incorrect data';
    },

    [authOperations.loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.loginUser.rejected](state, action) {
      state.error = 'No user with this email or password wrong!';
    },

    [authOperations.logoutUser.fulfilled](state, action) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [authOperations.fetchCurrentUser.pending](state, action) {
      state.isRefreshing = true;
      state.error = null;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
  },

  devtools: process.env.NODE_ENV === 'development',
});

export default authSlice;
