import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import labels from 'constant/label.json';

export type LabelState = {
  summary: string;
  experience: string;
  education: string;
  activity: string;
  skill: string;
  award: string;
};

const initialState: LabelState = labels;

type LabelKey = keyof typeof initialState;

export const labelSlice = createSlice({
  name: 'label',
  initialState,
  reducers: {
    updateLabel: (state, action: PayloadAction<{ field: string; value: string }>) => {
      const { field, value } = action.payload;
      state[field as LabelKey] = value;
    },
  },
});

export const { updateLabel } = labelSlice.actions;

export default labelSlice.reducer;
