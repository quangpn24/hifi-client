import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { templates } from 'constant/templates';
import { ComponentType } from 'react';

export type TemplateState = {
  index: number;
  template: ComponentType;
};

const initialState: TemplateState = {
  index: 0,
  template: templates[0],
};

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    updateTemplate: (state, { payload }: PayloadAction<number>) => {
      const index = payload;
      state.index = index;
      state.template = templates[index];
    },
  },
});

export const { updateTemplate } = templateSlice.actions;

export default templateSlice.reducer;
