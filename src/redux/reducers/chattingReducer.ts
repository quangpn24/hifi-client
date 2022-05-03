import { createReducer } from '@reduxjs/toolkit';
import { setRoom } from 'redux/actions/chattingActions';
import { Room } from 'types';

export type chattingState = {
  room?: Room | undefined;
  pending: boolean;
  error: boolean;
};

const initialState: chattingState = {
  room: undefined,
  pending: false,
  error: false,
};

export const chattingReducer = createReducer(initialState, (builder) => {
  builder.addCase(setRoom, (state, { payload }) => {
    state.room = payload;
  });
});
