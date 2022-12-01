import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchData from '../api';

const FETCH_WORLD_DATA = createAction('world/FETCH_WORLD_DATA');
const initialState = [];

export const getAllData = createAsyncThunk(FETCH_WORLD_DATA, async () => {
  const data = await fetchData();
  return data.response;
});

const worldReducer = createSlice({
  name: 'world',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (_state, action) => action.payload);
  },
});

export default worldReducer.reducer;
