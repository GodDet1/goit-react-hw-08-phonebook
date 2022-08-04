import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  login,
  logout,
  refreshCurrentUser,
  register,
} from 'Redux/Auth/auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unsetToken() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const registerUser = createAsyncThunk(register, async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  token.setToken(data.token);
  return data;
});

const loginUser = createAsyncThunk(login, async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  token.setToken(data.token);
  return data;
});

const logoutUser = createAsyncThunk(logout, async () => {
  const { data } = await axios.post('/users/logout');
  token.unsetToken();
  return data;
});

const fetchCurrentUser = createAsyncThunk(
  refreshCurrentUser,
  async (_, thunkAPI) => {
    const initialToken = thunkAPI.getState().auth.token;

    if (initialToken === null) {
      return thunkAPI.rejectWithValue(null);
    }

    token.setToken(initialToken);

    const { data } = await axios.get('/users/current');

    return data;
  }
);

const authOperations = {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
};

export default authOperations;
