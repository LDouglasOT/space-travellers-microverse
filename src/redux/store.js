import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './mission/missionSlice';
import rocketsSlice from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    mission: missionSlice,
  },
});

export default store;
