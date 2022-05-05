import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userData from 'constant/data.json';
import { arrayMoveMutable } from 'array-move';

export type Work = {
  name: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
};

export type WorkState = Array<Work>;

const initialState: WorkState = userData.work;

type WorkKey = keyof typeof initialState[0];

export const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    updateWork: (state, action: PayloadAction<{ index: number; field: string; value: string }>) => {
      const { index, field, value } = action.payload;
      state[index][field as WorkKey] = value;
    },
    addWork: (state) => {
      return [
        ...state,
        {
          name: '',
          position: '',
          website: '',
          startDate: '',
          endDate: '',
          summary: '',
        },
      ];
    },
    removeWork: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      return state.filter((_, ind) => ind !== payload);
    },
    changeOrderWork: (state, action: PayloadAction<{ oldIndex: number; newIndex: number }>) => {
      const { oldIndex, newIndex } = action.payload;
      arrayMoveMutable(state, oldIndex, newIndex);
    },
  },
});

export const { updateWork, addWork, removeWork, changeOrderWork } = workSlice.actions;

export default workSlice.reducer;
