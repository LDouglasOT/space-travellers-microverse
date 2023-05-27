import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
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
  rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const { id } = action.payload;
      const rocket = state.rockets.find((rocket) => `${rocket.id}` === id);
      if (rocket) {
        rocket.reserved = true;
      }
    },
    cancelRocketReservation: (state, action) => {
      const { id } = action.payload;
      const rocket = state.rockets.find((rocket) => `${rocket.id}` === id);
      if (rocket) {
        rocket.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    // get rockets
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
      })
      .addCase(getRockets.rejected, (state) => {
        state.isLoading = false;
        state.rockets = [];
      });
  },
});

export const rocketsActions = rocketsSlice.actions;
export default rocketsSlice.reducer;
