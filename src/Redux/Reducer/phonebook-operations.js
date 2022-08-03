import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNote, deleteNote, userPhoneBook } from './phonebook-actions';
import axios from 'axios';

const fetchUserPhonebook = createAsyncThunk(userPhoneBook, async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

const addUserPhonebook = createAsyncThunk(addNote, async notes => {
  const { data } = await axios.post('/contacts', notes);
  return data;
});

const deleteUserNotes = createAsyncThunk(deleteNote, async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
});

const phonebookOperations = {
  fetchUserPhonebook,
  addUserPhonebook,
  deleteUserNotes,
};

export default phonebookOperations;
