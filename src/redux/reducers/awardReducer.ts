import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userData from 'constant/data.json';
import { arrayMoveMutable } from 'array-move';

export type Award = {
  title: string;
  link: string;
  date: string;
  awarder: string;
  summary: string;
};

export type AwardState = Array<Award>;

const initialState: AwardState = userData.award;

type AwardKey = keyof typeof initialState[0];

export const awardSlice = createSlice({
  name: 'award',
  initialState,
  reducers: {
    updateAward: (
      state,
      action: PayloadAction<{ index: number; field: string; value: string }>
    ) => {
      const { index, field, value } = action.payload;
      state[index][field as AwardKey] = value;
    },
    addAward: (state) => {
      return [
        ...state,
        {
          title: '',
          link: '',
          date: '',
          awarder: '',
          summary: '',
        },
      ];
    },
    removeAward: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      return state.filter((_, ind) => ind !== payload);
    },
    changeOrderAward: (state, action: PayloadAction<{ oldIndex: number; newIndex: number }>) => {
      const { oldIndex, newIndex } = action.payload;
      arrayMoveMutable(state, oldIndex, newIndex);
    },
  },
});

export const { updateAward, addAward, removeAward, changeOrderAward } = awardSlice.actions;

export default awardSlice.reducer;
