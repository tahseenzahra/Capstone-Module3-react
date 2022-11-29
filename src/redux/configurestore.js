import { configureStore } from '@reduxjs/toolkit';
import continentSlice from './data/continentSlice';
import worldSlice from './data/worldSlice';

const store = configureStore({
  reducer: {
    worldData: worldSlice,
    continent: continentSlice,
  },
});

export default store;
