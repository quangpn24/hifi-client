import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userData from 'constant/data.json';

export type ActivityState = {
  award: string;
  volunteering: string;
};

const initialState: ActivityState = userData.activities;

type ActivityKey = keyof typeof initialState;

export const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    updateActivity: (state, action: PayloadAction<{ field: string; value: string }>) => {
      const { field, value } = action.payload;
      state[field as ActivityKey] = value;
    },
  },
});

export const { updateActivity } = activitySlice.actions;

export default activitySlice.reducer;
