import { RootState } from 'redux/store';

export const selectIntro = (state: RootState) => state.intro;
export const selectSocial = (state: RootState) => state.social;
export const selectEducation = (state: RootState) => state.education;
export const selectWork = (state: RootState) => state.work;
export const selectLabel = (state: RootState) => state.label;
export const selectAward = (state: RootState) => state.award;
export const selectTheme = (state: RootState) => state.theme;
export const selectTemplate = (state: RootState) => state.template;
export const selectUser = (state: RootState) => state.auth.user;
