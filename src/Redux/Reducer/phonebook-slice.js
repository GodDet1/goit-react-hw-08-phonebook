import { createSlice } from '@reduxjs/toolkit';
import phonebookOperations from './phonebook-operations';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.contacts.filter = action.payload;
    },
  },
  extraReducers: {
    [phonebookOperations.addUserPhonebook.fulfilled](state, action) {
      state.contacts.items = [...state.contacts.items, action.payload];
    },

    [phonebookOperations.deleteUserNotes.fulfilled](state, action) {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload
      );
    },

    [phonebookOperations.fetchUserPhonebook.fulfilled](state, action) {
      state.contacts.items = action.payload;
    },
  },
});

export const { changeFilter } = phonebookSlice.actions;
export default phonebookSlice.reducer;
