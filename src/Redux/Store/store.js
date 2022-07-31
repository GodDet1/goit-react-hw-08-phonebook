import { configureStore } from '@reduxjs/toolkit';
import { phoneBookAPI } from 'Redux/API/API';
import noteReducer from 'Redux/Reducer/noteReducer';

const store = configureStore({
  reducer: { noteReducer, [phoneBookAPI.reducerPath]: phoneBookAPI.reducer },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), phoneBookAPI.middleware],
});

export default store;
