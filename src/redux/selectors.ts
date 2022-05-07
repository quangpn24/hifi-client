import { RootState } from 'redux/store';

export const selectUser = (state: RootState) => state.user;
export const selectIntro = (state: RootState) => state.intro;
export const selectSocial = (state: RootState) => state.social;
export const selectEducation = (state: RootState) => state.education;
export const selectWork = (state: RootState) => state.work;
export const selectActivity = (state: RootState) => state.activity;
export const selectLabel = (state: RootState) => state.label;
