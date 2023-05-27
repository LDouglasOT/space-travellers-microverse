import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${API_URL}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);

const initialState = {
  isLoading: false,
  missions: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      missions: state.missions.map((mission) =>
        `${mission.mission_id}` !== action.payload.id
          ? mission
          : { ...mission, active: true }),
    }),
    leaveMission: (state, action) => ({
      ...state,
      missions: state.missions.map((mission) =>
        `${mission.mission_id}` !== action.payload.id
          ? mission
          : { ...mission, active: false }),
    }),
  },
  extraReducers: (builder) => {
    // get missions
    builder
      .addCase(getMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getMissions.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        missions: action.payload,
      }))
      .addCase(getMissions.rejected, (state) => ({
        ...state,
        isLoading: false,
        missions: [],
      }));
  },
});

export const missionsActions = missionsSlice.actions;
export default missionsSlice.reducer;
