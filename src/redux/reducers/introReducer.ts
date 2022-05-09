import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userData from 'constant/data.json';

export type IntroState = {
  name: string;
  title: string;
  image: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  skills: string;
  activities: string;
};

const initialState: IntroState = userData.intro;

type IntroKey = keyof typeof initialState;

export const introSlice = createSlice({
  name: 'intro',
  initialState,
  reducers: {
    updateIntro: (state, action: PayloadAction<{ field: string; value: any }>) => {
      const { field, value } = action.payload;
      state[field as IntroKey] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateIntro } = introSlice.actions;

export default introSlice.reducer;
