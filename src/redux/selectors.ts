import { RootState } from 'redux/store';

export const selectUser = (state: RootState) => state.auth.user;
export const chattingState = (state: RootState) => state.chatting;
