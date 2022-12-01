import { configureStore } from '@reduxjs/toolkit';
import worldReducer from './world/worldReducer';

const store = configureStore({
  reducer: {
    world: worldReducer,
  },
});

export default store;
