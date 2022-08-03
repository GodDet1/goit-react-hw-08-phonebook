import { createAction } from '@reduxjs/toolkit';
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  REFRESH_DATA,
  REFRESH_CURRENT_USER,
} from './auth-actionCreators';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
export const register = createAction(REGISTER);
export const refreshUser = createAction(REFRESH_DATA);
export const refreshCurrentUser = createAction(REFRESH_CURRENT_USER);
