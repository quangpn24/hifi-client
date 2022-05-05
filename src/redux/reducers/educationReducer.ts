import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userData from 'constant/data.json';
import { arrayMoveMutable } from 'array-move';

export type Education = {
  institution: string;
  website: string;
  type: string;
  area: string;
  startDate: string;
  endDate: string;
  score: string;
};

export type EducationState = Array<Education>;

const initialState: EducationState = userData.education;

type EduKey = keyof typeof initialState[0];

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    updateEducation: (
      state,
      action: PayloadAction<{ index: number; field: string; value: string }>
    ) => {
      const { index, field, value } = action.payload;
      state[index][field as EduKey] = value;
    },
    addEducation: (state) => {
      return [
        ...state,
        {
          institution: '',
          website: '',
          type: 'Degree',
          area: '',
          startDate: '',
          endDate: '',
          score: '',
        },
      ];
    },
    removeEducation: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      return state.filter((_, ind) => ind !== payload);
    },
    changeOrderEducation: (
      state,
      action: PayloadAction<{ oldIndex: number; newIndex: number }>
    ) => {
      const { oldIndex, newIndex } = action.payload;
      arrayMoveMutable(state, oldIndex, newIndex);
    },
  },
});

export const { updateEducation, addEducation, removeEducation, changeOrderEducation } =
  educationSlice.actions;

export default educationSlice.reducer;
