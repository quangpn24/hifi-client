import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import theme from 'constant/theme.json';

export type ThemeState = {
  primary: string;
  text: string;
  background: string;
};

const initialState: ThemeState = theme;

type ThemeKey = keyof typeof initialState;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<{ type: string; value: string }>) => {
      const { type, value } = action.payload;
      state[type as ThemeKey] = value;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
