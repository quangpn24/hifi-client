import { createReducer } from '@reduxjs/toolkit';
import { getUser } from 'redux/actions/userActions';
import { User } from 'types';

export type userState = {
  data: User | undefined;
  pending: boolean;
  error: boolean;
};

const initialState: userState = {
  data: undefined,
  pending: false,
  error: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUser.pending, (state) => {
      state.pending = true;
    })
    .addCase(getUser.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.data = payload;
    })
    .addCase(getUser.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
});
